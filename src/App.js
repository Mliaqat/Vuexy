import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Team from './Component/Team/Team';



function App() {
  return (
    <div className='bg'>
    <Navbar></Navbar>
    <Team title="Our Team"></Team>
     

    </div>
  );
}

export default App;
