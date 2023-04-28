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
    const peopleChange =(event)=>{
        setpeople (event.target.value)
    }
    
    const [Bill, setBill] = useState();
    const [tip, settip] = useState();
    const [people, setpeople] = useState(1);
    const [total, settotal] = useState();
    const [singleBill, setsingleBill] = useState();
    const [spillBetween, setspillBetween] = useState();
    const [Popups, setPopup] = useState(false);
    
    const calculate =()=>{

        if(Bill===undefined|| tip===undefined){
            // alert("Fill the form")
            settotal("Please, fill the form properly")
            setsingleBill('')
            setPopup(true)
        }
        else{
            console.log(Bill)
            const finalTip = (parseFloat(Bill) * parseFloat(tip))/100
            const finalBill = (parseFloat(Bill) + finalTip)
            const singleBill = (finalBill / parseFloat(people)).toFixed(2)
            settotal ("Bill: "+ Bill + " + " + "Tip: " + finalTip  +" = " + "Total: " + finalBill + " ৳" )
            setspillBetween("Spill bill Between: "+ people + " people")
            setsingleBill( " Per Peson = " + singleBill + " ৳" )
            setPopup(true);
        }
        // console.log(singleBill)
    }
    const popupHide =()=>{
        setPopup(false);
        window.location.reload();
    }

    return(
        <div className="InputField"> 
         {Popups && <Popup onHide={popupHide} totalBill ={total} spillBetween={spillBetween} singleBill={singleBill}/>}
            <div className="billSection">
            <label htmlFor="bill">Bill Amount: </label>
            <input id="bill" type="number" placeholder="Enter your bill ৳" onChange={billChange} value={Bill} key ="1"/>
            </div>
            <div className="tipSection">
            <label htmlFor="tip">Tip Percentage: </label>
            <input id="tip" type="number" placeholder="Enter tip %" key="2" onChange={tipChange} max={100} value={tip}/>
            </div>
            <div className="peopleSection">
            <label htmlFor="people">Bill split between: </label>
            <input id="people" type="number" placeholder="Enter tip %" key="3" onChange={peopleChange} min={people} value={people}/>
            </div>
            <button className="calculatebutton" onClick={calculate}>Calculate</button>

            <div>
            </div>
        </div>
    )
}

export default InputField;