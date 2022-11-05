import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import './Error.css'


export default function Home() {
  const history = useHistory();
    

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    });
  }, []);
  return (
    <div className='home_home'>
    
    <div className="box">
    <h1 id='error'>Error 404</h1>
  
      </div>
    </div>
  )
}
