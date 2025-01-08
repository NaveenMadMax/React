import { useState } from "react";
import "./task4.css";
function InputList() {
  const [inputValue, setInputValue] = useState<string>(""); // Tracks the input box value
  const [values, setValues] = useState<string[]>([]); // Stores all the added values

  //This function is to handle input value
  const handleAddValue = () => {
    if (inputValue!==""){
      setValues([...values, inputValue]); // Add the input value to the list
      setInputValue("");  // Clear the input box
    }else{
        alert('Enter any Value');
    }
  };
  //this function is to reset the output
  const handleReset = () => {
    setValues([]);
  };
  const handleDelete = () =>{
    setValues(values.slice(0,-1));
  }

  return (
    <div className="task4">
      <h1>Enter The Value to Add Numbers And select Delete Button To Delete one by one</h1>
      <div className="inputContainer">
        <input
          className="inputValue"
          type="text"
          placeholder="Type something"
          value={inputValue} // Current value of the input box
          onChange={(event)=>setInputValue(event.target.value)} // Update inputValue as the user types
        />
        <button onClick={handleAddValue}>Add</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDelete}>Delete</button>
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
