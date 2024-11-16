 const checkNumber=()=>{
    const num= (document.getElementById("number").value);
    alert(num>0?`${num} is positive`: num<0?`${num} is negative`:`${num} is zero`);
 }