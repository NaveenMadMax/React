import { useState } from "react";
const Task1= () => {
  const [showName, setShowName] = useState(false);
  return (
    <div className='showName'>
      <button onClick={()=>setShowName(!showName)}>
        {showName ? 'Hide Name' : 'Show Name'}
      </button>
      {showName &&<p>Naveen</p>}
    </div>
  );
};
export default Task1;



