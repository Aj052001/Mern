import React from "react";
import "./Register.css";
import { useState} from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Register() {
const history = useHistory();
const[user,setUser]=React.useState({
  firstname:"",
  lastname:"",
  email:"",
  gender:"",
  phone:"",
  age:"",
  password:"",
  cpassword:""
})
let name,value;
function handle(e)
{
   console.log(e);
   console.log(name)
   console.log(value)
   name = e.target.name;
   value = e.target.value;
   setUser({...user,[name]:value});
}


//data send in backend by using async function postData
const  postData = async (e)=>{
e.preventDefault();

//object destructing
const {firstname,lastname, email,gender,phone,
  age,password,cpassword } = user;

  const res  =  await fetch("/register",{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({
      firstname,lastname, email,gender,phone,
      age,password,cpassword 
    })
  })

  const data = await res.json();

  if(res.status === 422 || !data)
  {
    window.alert("Invalid Registration");
    console.log("Invalid Registration")
  }
  else{
    window.alert("Registration Successfully");
    console.log("Registration Successfully")
    history.push("/login")
  }
}

  return (
    <>
    <div className="box">
        <div className="image">
         <div className="img">
          
         </div>
        </div>
        <div className="container">
      <div className="title">Registration</div>
      <div className="content">
        <form action="/register" method="POST">
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                name="firstname" value={user.firstname} onChange={handle}
              />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input
                type="text"
                placeholder="Enter your lastname"
                name="lastname" value={user.lastname} onChange={handle}
              />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your email" name="email" value={user.email} onChange={handle} />
            </div>

            <div className="input-box">
              <input type="radio" name="gender" id="dot-1" value="Male" onChange={handle} />
              <input type="radio" name="gender" id="dot-2" value="Female" onChange={handle} />

              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
              </div>
            </div>

            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="text" placeholder="Enter your number" name="phone"  value={user.phone}onChange={handle} />
            </div>

            <div className="input-box">
              <span className="details">Enter your age</span>
              <input type="text" placeholder="Enter your age" name="age" value={user.age}onChange={handle}/>
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="text"
                placeholder="Enter your password"
                name="password" value={user.password} onChange={handle}
              />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input
                type="text"
                placeholder="Confirm your password"
                name="cpassword" value={user.cpassword} onChange={handle}
              />
            </div>
          </div>

          <div className="button">
            <input type="submit" value="Register" onClick={postData} />
          </div>
          <div className="login_link">
            Already a member? <NavLink to="/Login">Log in</NavLink>
          </div>
        </form>
      </div>
    </div>
    </div>
    
    
    </>
  );
}
