import { useState } from "react";
import "./task3.css";
function InputList() {
  const [inputValue, setInputValue] = useState(""); // Tracks the input box value
  const [values, setValues] = useState<string[]>([]); // Stores all the added values

  //This function is to handle input value
  const handleAddValue = () => {
    if (inputValue.trim() !== "") {
      setValues([...values, inputValue]); // Add the input value to the list
      setInputValue(""); // Clear the input box
    } else {
      alert("Type something");
    }
  };
  //this function is to reset the output
  const handleReset = () => {
    setValues([]);
  };
  //This function is to check the input is number or not
  const handleInputChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
  
    if (isNaN(Number(value))) {
      alert("User should enter only numbers");
    } else {
      setInputValue(value);
    }
  };

  return (
    <div>
      <div className="inputContainer">
        <input
          className="inputValue"
          type="text"
          placeholder="Type something"
          value={inputValue} // Current value of the input box
          onChange={handleInputChange} // Update inputValue as the user types
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
