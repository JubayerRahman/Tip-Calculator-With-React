import React, {useState} from "react";
import "./Popup.css"

const Popup =(props)=>{
    const [dev, setDev] = useState();
    const [devp, setDevp] = useState(false);

    const addDev =()=>{
        setDev('I Jobayer Rahman am the developer')
        setDevp(true)
    }
    return(
        <div className="Popup" >
            <h1 className="popupBill">{props.totalBill}</h1>
            {!devp &&<p className="para">P.S: if you click on the remove button it will automatically be removed</p>}
            {devp &&<p className="para">{dev}</p>}
            <button className="PopupButton" onClick={addDev}>Dev who?</button>
            <button className="PopupButton"  onClick={props.onHide}>reomve</button>
        </div>
    )
}

export default Popup;