
import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios";

function App() {
  
const [state, setstate] = useState("")

const user =async()=>{
  try{
    const data = await axios.get('https://randomuser.me/api/');
    console.log(data);
    console.log(data.data.results[0])
    setstate(data.data.results[0])
  }
  catch(error){
    console.log(error)
  }
}



  useEffect(() => {
    
    // const name ="VISHWAK"
    // setstate(state+5)
    user();
    
  }, [])

  return (
    <div className="App">
     {state && <img src ={state.picture.large}></img>}
    </div>
  );
}

export default App;
