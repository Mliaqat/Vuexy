import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Team from './Component/Team/Team';
import Login from './Component/Login/Login';




function App() {
  return (
    <div className='bg'>
  
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Login/>}/>        
     
      <Route  path="dashboard" element={<Team title="Our Team"/>}/>
    </Routes>
  </BrowserRouter>
    
     

    </div>
  );
}

export default App;
