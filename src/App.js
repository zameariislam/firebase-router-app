
import './App.css';
import Header from './components/Header/Header';
import { Routes,Route } from "react-router-dom";
import Home from './Home/Home';
import LogIn from './components/Login/LogIn';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>

       <Routes>
        <Route path='/' element={<Home/>} />
        <Route  path='/products' element={<Products/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
       
        <Route path='/login' element={<LogIn/>} />
      </Routes>
       
       
    
   
    </div>
  );
}

export default App;
