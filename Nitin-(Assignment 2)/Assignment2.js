var form1 = document.querySelector("#frm-1");
var result = document.querySelector(".result");
var resultFname = document.querySelector("#result-fname");
var resultLname = document.querySelector("#result-lname")
var resultEmail = document.querySelector("#result-email")

form1.addEventListener("submit",function(e){
    e.preventDefault();
    var resultAge = document.querySelector("#age-res");
    
    var fname = document.querySelector("#fname").value;
    var lname = document.querySelector("#lname").value;
    var email = document.querySelector("#email").value;
    var age = document.querySelector("#age").value;
    age = parseInt(age);

    result.style.display = "block";

    resultFname.innerHTML = fname[0].toUpperCase() + fname.slice(1);
    resultLname.innerHTML = lname[0].toUpperCase() + lname.slice(1);
    resultEmail.innerHTML = email;

    if(age > 15){
        resultAge.innerHTML = "You can Drive";
    }else{
        resultAge.innerHTML = "You cannot Drive";
    }
});