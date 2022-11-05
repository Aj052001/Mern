import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './About.css'
export default function About() {


  const history = useHistory();
const callAbout = async(e)=>{
  e.preventDefault();
  
  

try{

  const res  =  await fetch("/about",{
    method:"GET",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },

    credentials:"include"
  });

  const data = await res.json();
 
  console.log(data);
if(!res.status ===200)
{
  const error = new Error(res.error)
  throw error;
}
}catch(error){
  console.log("ajau");
   console.log(error)
   history.push("/Login")
}


}

  useEffect(()=>{
         callAbout();
  },[])

  return (
    <div className='about_about'>
    
    <div className="box">
    <h1 id='about'>Full Stack Developer</h1>
      </div>
     
    </div>
  )
}
