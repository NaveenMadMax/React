import { useState } from "react";
import "./task3.css";
function InputList() {
  const [inputValue, setInputValue] = useState<number>(0); // Tracks the input box value
  const [values, setValues] = useState<number[]>([]); // Stores all the added values

  //This function is to handle input value
  const handleAddValue = () => {
    if (inputValue!==0){
      setValues([...values, inputValue]); // Add the input value to the list
      setInputValue(0);  // Clear the input box
    }else{
        alert('Enter any Number')
    }
  };
  //this function is to reset the output
  const handleReset = () => {
    setValues([]);
  };

  return (
    <div className="mainContainer">
      <h1>Enter the numbers to add the value in a list</h1>
      <div className="inputContainer">
        <input
          className="inputValue"
          type="text"
          placeholder="Type something"
          value={inputValue} // Current value of the input box
          onChange={(event)=>setInputValue(Number(event.target.value))} // Update inputValue as the user types
        />
        <button onClick={handleAddValue}>Add</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="outputContainer">
        {values.map((value) => (
          <div> {value}</div>
        ))}
      </div>
    </div>
  );
}

export default InputList;
