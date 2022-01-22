import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile/:username' element={<Profile/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
