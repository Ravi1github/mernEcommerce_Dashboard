
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Route,Routes} from 'react-router-dom'

import Login from './component/Login';
import Signup from './component/Signup';


import PrivateComponent from './component/PrivateComponent';
import Addproduct from './component/Addproduct';
import Productlist from './component/Productlist';
import Updateproduct from './component/Updateproduct';

function App() {
  
  return (
 <div className="app">
 <Navbar/>

<Routes>
  {/* closing on private component */}
  {/* auth hogo tabhi show karega */}
<Route  element={<PrivateComponent/>}  >
 <Route path='/' element={<Home/>}  />
 <Route path='/about' element={<About/>}  />
 <Route path='/product' element={<Productlist/>}  />
 <Route path='/addproduct' element={<Addproduct/>}  />
 
 <Route path='/update/:id' element={<Updateproduct/>}  />

 
 </Route>
 <Route path='/login' element={<Login/>}  />
 <Route path='/signup' element={<Signup/>}  />

 </Routes>
 </div>
  );
}

export default App;
