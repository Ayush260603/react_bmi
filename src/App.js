import { useState } from 'react';
import './App.css';

function App() {
   //defining states(variables) in the app

    const[weight, setWeight]=useState(10);
    const[height, setHeight]=useState(10);
    const[bmi, setBmi]=useState("");
    const[message, setMessage]=useState("");

    // logic

    const calculate=(e)=>{
      e.preventDefault()
      if(weight==0||height==0){
        alert("please enter valid height and weight values")
      }
      else{
         let bmi=(weight/(height*height))*703;
        setBmi(bmi.toFixed(1));
      }

      if(bmi<25){
        setMessage("You are malnourished")
      }
      else if(bmi>=25 && bmi<32){
        setMessage("You are healthy")
      }
      else{
        setMessage("You are overweight")
      }
    }
     const reload=()=>{
      window.location.reload()
     }

    return (
   
    <div className="App">
      
         <h2>bmi calculator</h2>
         <p> made by ayush </p>
         <form onSubmit={calculate}> 
         <div>
          <label className='label'>Weight(in lbs)</label>
          <br/>
          <input className="inputform" type='number' placeholder='enter your weight' value={weight}  onChange={(e)=>setWeight(e.target.value)}/>
          </div>

          <div>         
          <label className='label'>height(in meters)</label>
          <br/>
          <input className="inputform"type='number' placeholder='enter your height' value={height} onChange={(event)=>setHeight(event.target.value)}/>
          </div>

          <div>
          <button className='btn btn-submit'>Submit</button>
          <button className='btn btn-reload' onClick={reload}>Reload</button>
          </div>

          <p>your calculated bmi is:{bmi}</p>
          <p>{message}</p>

         </form>
          
        
    </div>
  );
}

export default App;
