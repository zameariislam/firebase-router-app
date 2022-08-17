
import './App.css';
import Header from './components/Header/Header';
import { Routes,Route } from "react-router-dom";
import Home from './Home/Home';
import LogIn from './components/Login/LogIn';

function App() {
  return (
    <div className="App">
      <Header></Header>

       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn/>} />
      </Routes>
       
       
    
   
    </div>
  );
}

export default App;
