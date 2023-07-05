import { useState } from 'react'
import './Landing.css'
import './bootstrap.css'

function Landing() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1></h1>
      <div className='container-home'>

      <a href="/listall" rel="noopener noreferrer">
        <button className='btn btn-secondary'>Listar Tiendas</button>
      </a>
      <a href="/create" rel="noopener noreferrer">
        <button className='btn btn-primary'>Crear tienda</button>
      </a>
     
    
    

      </div>
     
    </>
  )
}

export default Landing
