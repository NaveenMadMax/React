const getLetterGrade=()=>{
    const grade = parseFloat(document.getElementById("grade").value);

    if (grade>=90) {

        alert(`your grade is "A"`); 

    } else if (grade>=80) {

        alert (`Your Grade is "B"`);  

    } else if (grade>=70){

        alert (`Your Grade is "C"`);

    } else if (grade>=60){

        alert (`Your Grade is "D"`);

    }
    else if (grade<60){
        alert (`Your Grade is "F"`);
    }
    else{
        alert (`Enter Your Grade`)
    }
}