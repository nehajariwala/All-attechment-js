let user=JSON.parse(localStorage.getItem("user"))||[]


const validation_form = (e) => {
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
   

    var nameRegex = /^[a-zA-Z\-]+$/;
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let emailregex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (nameRegex.test(username)==false) {
        document.querySelector("#username").style.border = "2px solid red";
        alert("Enter a valid username");
        

        return;
    } else {
        document.querySelector("#username").style.border = "2px solid green";
    }

    if(emailregex.test(email)==false){
        document.querySelector("#email").style.border = "2px solid red";
        alert("Enter a valid email");
        

        return;
    } else {
        document.querySelector("#email").style.border = "2px solid green";
    }


    
    if (regularExpression.test(password)==false) {
        document.querySelector("#password").style.border = "2px solid red";
        alert("Enter a valid password");
        return;
    } else {
        document.querySelector("#password").style.border = "2px solid green";
    }


    
     let data={
         email:document.querySelector("#email").value,
        username:document.querySelector("#username").value,
         password:document.querySelector("#password").value,
       
     };
     
     user.push(data)
   
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('islogin',true);
    window.location.href="/login.html";
}

let islogin=localStorage.getItem("islogin")
if(islogin){
   document.getElementById("logout").innerHTML="logout"
}

document.querySelector("#valdi_form").addEventListener("submit", validation_form);















