const isLeapYear=()=>{
    const year =(document.getElementById("year").value)

    if (year % 400===0) {

        alert (`${year} is a Leap Year`);

    } else if (year % 100 ===0) {

        alert (`${year} is not a Leap Year`);

    } else if (year % 4 ===0) {
        
        alert (`${year} is a Leap Year`);

    }
    else {
        alert (`${year} is not a Leap Year`)
    }
}