import React, { useState } from "react";
import "./login.css";
import { NavLink, useHistory } from "react-router-dom";


export default function Login() {
  const history = useHistory();
const [email,setEmail]=useState('');
const [password,setPasseord]=useState('');


const LoginUser = async(e)=>{
  e.preventDefault();
  const res  =  await fetch("/signin",{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({
      email,password
    })
  })


  const data = await res.json();

  if(res.status === 400 || !data)
  {
    window.alert("Invalid Credentials");
    // console.log("Invalid Registration")
  }
  else{
    window.alert("Login Successfully");
    // console.log("Registration Successfully")
    history.push("/")
  }
}
  return (
    <>
    <div className="box_log">
        <div className="image_log">
         <div className="img_log">
          
         </div>
        </div>

        <div className="center">
      <h1>Login</h1>
      <form action="/Signin" method="POST">
        <div className="txt_field">
          <input type="email" required name="email"autoComplete="off" value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required name="password"
          
          autoComplete="off"
          value={password}
          onChange={(e)=>setPasseord(e.target.value)}
          />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">
             <NavLink to="#">Forgot Password?</NavLink>
        </div>
        <input type="submit" value="Login" 
        onClick={LoginUser} />
        <div className="signup_link">
          Not a member? <NavLink to="/register">Register</NavLink>
        </div>
      </form>
    </div>
      </div>  
    
    
    </>
  );
}
