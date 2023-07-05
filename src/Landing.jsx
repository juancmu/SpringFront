
import './Landing.css'
import './bootstrap.css'
import { useNavigate } from 'react-router-dom'

function Landing() {

  




  return (
    <>
    <h1></h1>
      <div className='container'>

      <a href="/listall" rel="noopener noreferrer">
        <button className='btn btn-secondary'>Listar Todas las Tiendas</button>
      </a>
      <a href="/create" rel="noopener noreferrer">
        <button className='btn btn-primary'>Crear tienda</button>
        <br></br>
      </a>
      <a href="/findbyname" rel="noopener noreferrer">
        <button className='btn btn-danger'>Buscar por Nombre</button>
      </a>

     
   
   
              </div>

              

   
     
    </>
  )
}

export default Landing
