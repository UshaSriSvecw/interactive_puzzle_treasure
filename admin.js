var email = document.forms['form']['email'].value;
var password = document.forms['form']['password'].value;
function auth(){
    
    if(email =="admin@gmail.com" && password =="admin123"){
     
     
     window.location="leader.html";
     alert("Login Successfull");
     return true;
    }
    else{
     alert("Login Failed");
     return;
    }
     }
