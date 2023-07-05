import React, { useEffect, useState } from 'react'
import './bootstrap.css'
import axios from "axios"
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Update = () => {

  let navigate = useNavigate();

  const {id} = useParams()


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

  useEffect(()=>{
        
    loadStore();
    


},[] )


  const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`/${id}`, store)
      navigate("/listall");
  }

  const loadStore = async() =>{

    const result = await axios.get(`/${id}`);
    setStore(result.data);

}



  return (
    
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

           <h2 className='text-center m-4'>Editar tienda</h2>
 
              <form onSubmit={(e)=> onSubmit(e)}>
              <div className='mb-3'>
                <label htmlFor="NameStore">Editar Nombre de la Tienda</label>
               <input
                type={'text'}
                className='form-control'
                 placeholder='Ingrese nuevo nombre'
                  name='nameStore'
                  value={nameStore}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor="AdressStore">Editar Direccion de la Tienda</label>
               <input
                type={'text'}
                className='form-control'
                 placeholder='Ingrese neuva direccion'
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

              <button  type="submit" className='btn btn-outline-primary'>Editar</button>
              <Link  className='btn btn-outline-danger mx-2' to="/listall">Cancel</Link>
              </form>
         </div>


      </div>
   
</div>

    
    
  )
}
