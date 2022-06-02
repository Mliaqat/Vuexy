import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login() {
    let navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const setlogin=()=>{
        if(email == "" || password==""){
            alert("Please Fill All Filed")
        }
        else{
            localStorage.setItem("login", "1");
            navigate("/dashboard", { replace: true });
        }
    }


  return (
<div className="login-page">
  <div className="login">
      <form className="login-form">
          <h1 className='mb-3'>Login</h1>
      <input type="Email" placeholder="Enter Email" onChange={(e)=>setEmail(e)}/>
      <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e)} />
      <button onClick={setlogin}>login</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
  )
}

export default Login;