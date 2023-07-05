import React, { useRef, useState } from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'


import './styles.css'

// import useCounter from './useCounter';
// import useCustomHook from './useCustomHook.jsx';



// const {geoLoc, increment, reset} = useCounter;




export const Maps = (props) => {


  
const geoStoreBooks = [
  {lat: 4.724769857324674, lon: -74.03644203616295, bookStore: "Books & Books Bogota"}, 
  {lat: props.lat, lon: props.lon, bookStore: "Books & Books Bogota"}, 
]

console.log(geoStoreBooks);



const [geoLoc, setGeoLoc] = useState(0)

const increment =()=>{

geoLoc<1 ? setGeoLoc(geoLoc+1) : setGeoLoc(1)

}



function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

//console.log(lats)

  


//const result2 = store.find(item => item.id === 5);


 //console.log(result2)

// const [geoLoc, increment, reset] = useCustomHook;




//const result2 = store.find(item => item.id === 5);


const mapRef = useRef()

const ZOOM_LEVEL  = 8;





  return (
<>
    <div className='findStore'> 
  
    <div className='btnStore'><button className='btn-danger' onClick={increment}>Ubicar</button></div>
    </div> 
   <MapContainer className='maps'
   center= {{lat: geoStoreBooks[geoLoc].lat, lon: geoStoreBooks[geoLoc].lon }}
   zoom={ZOOM_LEVEL} 
   ref={mapRef}
   >
   <ChangeView center={{lat: geoStoreBooks[geoLoc].lat, lon: geoStoreBooks[geoLoc].lon }} zoom={ZOOM_LEVEL} /> 
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[props.lat, props.lon]}>
    <Popup>
    <p>{props.nameStore }</p>
    </Popup>
  </Marker>

    </MapContainer>
  {/* <h1>{geoLoc}</h1> */}
   {/* <button onClick={reset}>Tienda Inicial</button> */}


 
   </>

  )
}
