import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Landing.css'
import './bootstrap.css'

export const FindbyName = () => {


  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    
    var value = event.target.search.value

    // 👇️ redirect to /contacts
    navigate(`/search?filter=${value}`);
  };

  return (
    <>
    <div className='row'>
        

    <h2 className='m-4'>Buscar por Nombre</h2>
    </div>
 <div>
 <form onSubmit={handleSubmit}>
     
        <input type="text" name='search' />
        <button type='submit'>Buscar</button>

</form>


       </div>

       </>
  )
}
