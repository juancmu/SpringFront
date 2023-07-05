import React from 'react';

import { Outlet } from 'react-router-dom';
import './Landing.css'

import Landing from './Landing';

const Home = () => {
  return (
  

<>
<h1>Actividad 2 - Desarrollo de Aplicaciones WEB - Juan Carlos Munoz</h1>
      <div className='container-home'>
    <div>

    <Landing /> 
    </div>
      <div>
    
      <Outlet />
        </div>  
        </div>
   

        </>
  
  )
}

export default Home