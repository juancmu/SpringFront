import React, { useEffect, useState } from 'react'
import axios from "axios"
import './bootstrap.css'
import { Link, useParams } from 'react-router-dom'

import {Maps} from "./Maps";

export const Read = () => {

    const [store, setStore] = useState({
        nameStore: "",
        adresStore: "",
        lat: "",
        lon: ""
    
      })

      const {id} = useParams();

      
    useEffect(()=>{
        
        loadStore();
        


    },[] )

    const loadStore = async() =>{

        const result = await axios.get(`/${id}`);
        setStore(result.data);
    
    }

   
  return (
    


    <div className='container'>
    <div className='row'>
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
         <h2 className='text-center m-4'>Info Tienda   <Link className="btn btn-primary my-2" to={"/listall"}>Regresar</Link></h2>
         
            <div className='card'>
            <div className='card-header'>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                    <b>Nombre tienda:  </b>
        {store.nameStore}

                </li>
                <li className='list-group-item'>
                    <b>Direccion:  </b>
                    {store.adresStore}

                </li>
                <li className='list-group-item'>
                    <b>Ubicacion: Latitud {store.lat} Longitud   {store.lon}</b>


                </li>
                <Maps lat={store.lat} lon={store.lon} nameStore={store.nameStore} id={store.id}/>
                
            </ul>

              
            </div>
            </div>

         </div>

         </div>

         </div>
  )
}

