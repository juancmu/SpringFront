import React, { useEffect, useState } from 'react'

import axios from "axios"
import { Link, useParams } from 'react-router-dom'

export const ListAll = () => {

    const [stores, setStores] = useState([])

    const {id} = useParams();

    useEffect(()=>{
        
        loadStores();
        


    },[] )

    const loadStores = async() =>{

        const result = await axios.get("");
        setStores(result.data);

    }
  

    const deleteStore = async (id) => {

        await axios.delete(`/${id}`);

        loadStores();


    }


  return (
  
        <div className='container'>
                <div className='py-8'></div>
                <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Nombre Tienda</th>
      <th scope="col">Direccion</th>
      <th scope="col">Latitud</th>
      <th scope="col">Longitud</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {
        stores.map((store, index)=>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{store.nameStore}</td>
            <td>{store.adresStore}</td>
            <td>{store.lat}</td>
            <td>{store.lon}</td>
            <td> 
                <Link className='btn btn-primary mx-2' to={`/read/${store.id}`}>Ver</Link>
                <Link className='btn btn-outline-primary mx-2' to={`/update/${store.id}`}>Editar</Link>
                <button className='btn btn-danger mx-2' onClick={()=>deleteStore(store.id)}>Borrar</button>
        
            </td>
          </tr>

        ))
    }
   
   
  </tbody>
</table>


        </div>



  )
}
