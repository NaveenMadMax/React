import  { useState } from "react";
import './task2.css'

function InputAlert() {
  const [text, setText] = useState("");

  const handleButtonClick = () => {
    alert(text); // Show the alert with the input value
  };

  return (
    <div className="inputValueContainer">
      <label htmlFor="input" className="inputLabel">Enter any value then select Show Alert button to see the valu in the alert message: </label>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)} // Update text when input changes
        className="nameInputFeild"
      /> 
      <div className="alertButtonContainer">
      <button onClick={handleButtonClick} className="alertButton">Show Alert</button>
      </div>
    </div>
  );
}

export default InputAlert;
