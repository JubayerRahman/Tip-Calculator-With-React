import React from "react";
import Input from './InputField';
import './MainField.css'
const MainFielld =()=>{
    return(
        <div className="MainField">
        <h1>Tip Calculator</h1>
        <p style={{lineHeight:"35px"}}>This is a demo project to examine my &nbsp; 
         <span 
         style={{backgroundColor:"white", color:"#282c34", padding:"5px", margin:"5px", borderRadius:"5px"}}>
            <b>React</b></span> skills.</p>
        <Input/>
        </div>
    )
}

export default MainFielld;