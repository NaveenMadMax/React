const getFactorial=()=>{
    const number= parseInt(document.getElementById("inputNumber").value);
    let fact=number;
    for(i=1;i<number;i++){
        fact=fact*i;
    }
    alert(`The Factorail for ${number} is ${fact}`)
}