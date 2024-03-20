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
}

document.querySelector("#valdi_form").addEventListener("submit", validation_form);