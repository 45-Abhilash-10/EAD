import React,{useState} from "react";
function Counter()
{
    const[count,setCount]=useState(0);
    const[dark,setDark]=useState(false);

    return(
        <div style={{backgroundColor:dark?'black':'white',color:dark?'white':'black',height:'100vh'}}>
         <h2>
            Counter program
         </h2>
         <p>Count:{count}</p>
         <button onClick={()=>setCount(count+1)}>Increment</button>
          <button onClick={()=>setCount(count-1)} disabled={count === 0}>
            decrement
          </button>
           <button onClick={()=>setCount(0)}>reset</button>
          <button onClick={()=>setDark(!dark)}>Toggle Dark Mode</button>
        </div>
    )
}
export default Counter; 
