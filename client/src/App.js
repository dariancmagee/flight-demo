import React, { useEffect, useState } from 'react';
import FreeSolo from './components/Autocomplete';
import './App.css';
import airplane from "./components/video/airplane.mp4"

import Flights from './flights.json'

function App() {

  const [backendData, setBackendData] = useState([{}])

  const fetchCity = () => {
    fetch("flights.json/destination")
      .then((response) => response.json())
      .then((response) => {
          
      })
      .catch(error => console.error(error))
    };
  

  // Fetch api from backend
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  
  // This is what shows up on the app
  return (
    <div className='title'>
             <video autoPlay loop muted
    style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: "-1"
    }}
 >
     <source src={airplane} type="video/mp4"/>
 </video>

      <h1 className="header">FLIGHT BOOKING APP</h1>
      <br />

        <div className='searchBox'> 
          <FreeSolo />
        </div>
        <br />


        <div className='button'>
        <button onClick={fetchCity}>Search</button>
        </div>

    </div>
  )
}


export default App;