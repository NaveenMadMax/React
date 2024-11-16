const checkNumber=()=>{
    const num= (document.getElementById("number").value);
    alert(num % 2===0 ? `${num} is EVEN`:`${num} is ODD`);
 }