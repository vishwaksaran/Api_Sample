import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';

const Multiple = () => {
    
    
 const [state, setstate] = useState([]);
 const [country, setcountry] = useState("");
 const [fetchcity, setfetchcity] = useState(null);
 const [Submit, setSubmit] = useState(false)
 const [city, setcity] = useState("")

const fetch =(country)=>{
    setSubmit(false)
    setcity(null);
    setcountry(country)
    const findCity = state.find((c) => c.country === country);
    setfetchcity(findCity.cities)
}

 const details =async()=>{
     try{
     const data = await axios.get('https://countriesnow.space/api/v0.1/countries/')
     setstate(data.data.data)
     console.log(data.data.data)
     }
     catch(error)
     {console.log(error)}

 }

 const SubmitHandle =()=>{
     if(country && city)
 setSubmit(true);
 }

    
useEffect(() => {
   details()
   
}, [])    
    return (
        <div className="App">
            <div className="AppName">
                       <h1>SELECT YOUR HOME TOWN</h1>
                       <div>
                           {state && <select onChange={(e)=> fetch(e.target.value)} value={country}>
                               <option disabled selected hidden>
                                   Select Country
                               </option>
                               {state.map((e)=>(
                                   <option key={`${e.country}-${Date.now()}`} value={e.country} >{e.country}</option>
                                  
                               ))}
                           </select>}
                           {fetchcity && <select onChange={(e)=>setcity(e.target.value)} value={city}>
                               <option disabled selected hidden>
                                   Select City
                               </option>
                               {fetchcity.map((e)=>(
                                   
                                   <option key={`${e}-${Date.now()}`} value={e}  >{e}</option>

                                   
                               ))}
                           </select>}
                           <button onClick={()=>SubmitHandle()}>GO</button>
                           {Submit && <h3> THE COUNTRY IS {country} and CITY IS {city}</h3>}
                       </div>
            </div>
            
        </div>
    )
}

export default Multiple
