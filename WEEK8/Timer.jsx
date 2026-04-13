import React,{useEffect, useState} from "react";
function Timer(){
    const[seconds,setSec]=useState(0);
    const[running,IsRunning]=useState(false);
    const[msg,setMsg]=useState("");  
    useEffect(()=>{
        let interval;
        if(running){
            interval=setInterval(()=>{
                setSec(seconds=>{
                    if(seconds===60){
                        IsRunning(false);
                        setMsg("Time's up!");
                        return seconds;
                    }
                    return seconds+1;
                });
            },1000);
            return()=>{
                clearInterval(interval);
            }   
        }
    },[running]);
    return(
        <div style={{textAlign:"center"}}>
            <h2>Timer: {seconds} seconds</h2>
            {msg && <p>{msg}</p>}
            <br />
            <button onClick={()=>IsRunning(true)}>Start</button>
            <button onClick={()=>IsRunning(false)}>Stop</button>
            <button onClick={()=>{IsRunning(false);setSec(0);}}>Reset</button>
        </div>
    )

}
export default Timer;