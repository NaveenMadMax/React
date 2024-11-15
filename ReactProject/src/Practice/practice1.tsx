import { useState } from "react";

const practiceTask1= () =>{
  const[num,setCount] = useState(0);
  const handelAdd=()=>{
    setCount(num+1)
  }
  return(
    <div>
      <button onClick={handelAdd}>count is {num}</button>
    </div>
  )
};
export default practiceTask1;


// function Task1(){
//   const[text,setText]=useState('');
//   const handelInput=(event: { target: { value: SetStateAction<string>; }; })=>{
//     setText(event.target.value)
//   }
//   return(
//     <div>
//       <input type="text" value={text} onChange={handelInput} />
//       <p>Input Text is: {text}</p>
//     </div>
//   );
// };

// function Task1() {
//   const[toogle,setToogle]=useState(false)
//   const clickHandle=()=>{
//     setToogle(!toogle);
//   }
//   return (
//     <div>
//       <button onClick={clickHandle}>Show/Hide Text</button>
//       {toogle && <p>Toggle me!</p>}
//     </div>
//   );
// }

// function Task1() {
//   return (
//     <div>
//       <textarea />
//       <p>Character count: TODO</p>
//     </div>
//   );
// }