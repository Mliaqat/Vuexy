import React from 'react'

import { Link, useNavigate } from 'react-router-dom';
import Data from '../../Contex/Data';

function Navbar() {
  let navigate = useNavigate();
  const logout=()=>{
    localStorage.setItem("login", "");
    navigate("/", { replace: true });
  }
  return (
   <Data.Consumer >

 {
   (contex)=>{
return  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
  <a className="navbar-brand">React Partices</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="dashboard">Dashboard</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="reducer">Use Reducer</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="http">Apis Caling</Link>
      </li>
      <li className="nav-item">
       <label className="nav-link" onClick={logout}>Logout</label>
      </li>
      <li className="nav-item">
       <label className="nav-link">{contex}</label>
      </li>
         
    </ul>
  </div>
</div>
</nav>
   }

 }
   </Data.Consumer>
  )
}

export default Navbar;