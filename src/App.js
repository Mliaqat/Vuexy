import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Team from './Component/Team/Team';
import Login from './Component/Login/Login';
import UseReducer from './Component/UseReducer/UseReducer';
import Data from './Contex/Data';
import Https from './Component/Https/Https';




function App() {
  const Email="Context"
  return (
    <div className='bg'>
  <Data.Provider value={Email}>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Login/>}/>        
     
      <Route  path="dashboard" element={<Team title="Our Team"/>}/>
      <Route  path="reducer" element={<UseReducer/>}/>
      <Route  path="http" element={<Https/>}/>
    </Routes>
  </BrowserRouter>
  </Data.Provider>
    
     

    </div>
  );
}

export default App;
