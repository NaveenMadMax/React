const checkNumber=()=>{
    const num1= Number(document.getElementById("number1").value);
    const num2= Number(document.getElementById("number2").value);
    if(num1>num2){
        alert(`${num1} is Greater`);
    }
    else if(num2>num1){
        alert(`${num2} is Greater`);
    }
    else {
        alert('Both the numbers are equal');
    }
 }