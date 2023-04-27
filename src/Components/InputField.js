import React, {useState} from "react";
import './InputField.css'
import Popup from "./Popup";

const InputField =()=>{
    
    
    const billChange =(event)=>{
        setBill (event.target.value)
    }
    const tipChange =(event)=>{
        settip (event.target.value)
    }
    
    const [Bill, setBill] = useState();
    const [tip, settip] = useState();
    const [total, settotal] = useState();
    const [Popups, setPopup] = useState(false);

    const calculate =()=>{
        console.log(Bill)
        const finalTip = (parseFloat(Bill) * parseFloat(tip))/100
        const finalBull = (parseFloat(Bill) + finalTip)
        settotal ("Total: " +Bill +" + "+ finalTip + " = " + finalBull + " ৳" )
        setPopup(true);
    }
    const popupHide =()=>{
        setPopup(false);
        window.location.reload();
    }

    return(
        <div className="InputField"> 
         {Popups && <Popup onHide={popupHide} totalBill ={total}/>}
            <div className="billSection">
            <label htmlFor="bill">Bill Amount: </label>
            <input id="bill" type="number" placeholder="Enter your bill ৳" onChange={billChange} value={Bill} key ="1"/>
            </div>
            <div className="tipSection">
            <label htmlFor="tip">Tip Percentage: </label>
            <input id="tip" type="number" placeholder="Enter tip %" key="2" onChange={tipChange} value={tip}/>
            </div>
            <button className="calculatebutton" onClick={calculate}>Calculate</button>

            <div>
            </div>
        </div>
    )
}

export default InputField;