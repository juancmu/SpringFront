import React, { useEffect, useState } from 'react'
import './bootstrap.css'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

export const Create = () => {

  let navigate = useNavigate();

  const [store, setStore] = useState({
    nameStore: "",
    adresStore: "",
    lat: "",
    lon: ""

  })

  const{nameStore, adresStore, lat, lon} = store

  const onInputChange = (e) => {

    setStore({...store, [e.target.name]:e.target.value})

  };

  const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:3000/store", store)
      navigate("/listall");
  }



  return (
    
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

           <h2 className='text-center m-4'>Crear Tienda</h2>
 
              <form onSubmit={(e)=> onSubmit(e)}>
              <div className='mb-3'>
                <label htmlFor="NameStore">Nombre de la Tienda</label>
               <input
                type={'text'}
                className='form-control'
                 placeholder='Ingrese Nombre de la tienda'
                  name='nameStore'
                  value={nameStore}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor="AdressStore">Direccion de la Tienda</label>
               <input
                type={'text'}
                className='form-control'
                 placeholder='Ingrese Direccion de la tienda'
                  name='adresStore'
                  value={adresStore}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor="Latitud">Latitud</label>
               <input
                type={'number'}
                className='form-control'
                 placeholder='Latitud en decimales'
                  name='lat'
                  value={lat}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor="Longitud">Longitud</label>
               <input
                type={'number'}
                className='form-control'
                 placeholder='Longitud en decimales'
                  name='lon'
                  value={lon}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>

              <button  type="submit" className='btn btn-outline-primary'>Crear</button>
              <Link  className='btn btn-outline-danger mx-2' to="/listall">Cancel</Link>
              </form>
         </div>


      </div>
   
</div>

    
    
  )
}
