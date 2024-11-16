const checkNumber=()=>{
    const num1= (document.getElementById("number1").value);
    const num2= (document.getElementById("number2").value);
    alert(num1>num2?`${num1} is Greater`:num1<num2?`${num2} is Greater`:`${num1} and ${num2} are Equal`);
 }