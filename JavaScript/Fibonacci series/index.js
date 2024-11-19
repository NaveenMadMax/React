const printFibonacci=()=> {
    const range = parseInt(document.getElementById("inputRange").value);
    let a=0 , b= 1;
    let result = `${a},${b}`;
    for(i=2;i<range;i++){
        const next=a+b;
        result = result+`,${next}`;
        a=b;
        b=next;
    }
    alert(`Fibonacci Series: ${result}`);
}