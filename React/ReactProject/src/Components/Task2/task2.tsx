import  { useState } from "react";
import './task2.css'

function InputAlert() {
  const [text, setText] = useState<string>("");
  return (
    <div className="inputValueContainer">
      <label htmlFor="input" className="inputLabel">Enter any value then select Show Alert button to see the valu in the alert message: </label>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(event) => setText(event.target.value)} // Update text when input changes
        className="nameInputFeild"
      /> 
      <div className="alertButtonContainer">
      <button onClick={()=>{alert(text)}} className="alertButton">Show Alert</button>
      </div>
    </div>
  );
}

export default InputAlert;
