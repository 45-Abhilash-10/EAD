import React,{useState} from "react";
function Password(){
    const[password,setPassword]=useState("");
    const[strength,setStrength]=useState("");
    const checkStrength=(value)=>{
        setPassword(value);
        let StrongRegex=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%&]).{8,}$/;
        let MediumRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;
        if(StrongRegex.test(value)){
            setStrength("Strong");
    }
    else if(MediumRegex.test(value)){
        setStrength("Medium");
    }
    else{
        setStrength("weak");
    }
}
    return(
        <div style={{textAlign:"center"}}>
            <h1>Password Strength Checker  </h1>
            <input type="password" placeholder="enter password" value={password} onChange={(e)=>checkStrength(e.target.value)} /> 
            <p>Password Strength : {strength}</p>
        </div>
    )

}
export default Password;