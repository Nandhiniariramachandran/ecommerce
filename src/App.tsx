import './App.css';
import HomePage from './homepage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginPage from './loginpage';
import ShoppingPage from './shoppingpage';
import Advertisement from './advertisement';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/advertisement' element = {<Advertisement/>}/>
      <Route path='/home' element = {<HomePage/>}/>
      <Route path='/login' element = {<LoginPage/>}/>
      <Route path='/shoppingpage' element = {<ShoppingPage/>}/>

      
      </Routes>
      </BrowserRouter>
          
          
    </div>
  );
}

export default App;



























