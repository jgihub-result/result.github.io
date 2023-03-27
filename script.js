function Submit() {
    // event.preventDefault();
    var forme = document.querySelector('.form');
    var resultimg = document.querySelector('.img');
    // var rolno = document.querySelector('#rollno');
    // var fname = document.querySelector('#father');
    // var exmopt = document.querySelector('#examId');
    var rollno = document.forms["thisform"]["rollno"].value;
    var fatname = document.forms["thisform"]["father"].value;
    var examval = document.forms["thisform"]["examId"].value;
    console.log(rollno, fatname, examval)
    if (rollno.toUpperCase() === '21EJICS121' && fatname.toUpperCase() === 'GOPAL KUMAR SINHA' && examval.toUpperCase() === 'B. TECH. III SEMESTER EXAMINATION (MAIN) DECEMBER-2022') {
        forme.style.display = 'none';
        resultimg.style.display = 'block'
    }
    else{
        window.alert("Enter the correct data");
    }
}
