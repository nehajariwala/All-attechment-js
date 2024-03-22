
let user=JSON.parse(localStorage.getItem("user"))||[]


const handalogin=(e)=>{
e.preventDefault()

let email = document.querySelector("#email").value;
let password = document.querySelector("#password").value;

if(user.length==0){
    window.location.href="/sign-up.html";
    // console.log("incorect email or password")
}

for(let i=0;i<user.length;i++){
    if((user[i].email==email) && (user[i].password==password)){
        window.location.href="/home.html";   
    }
}


    

}


let islogin=localStorage.getItem("islogin")
if(islogin){
   document.getElementById("logout").innerHTML="logout"
}



document.getElementById("login").addEventListener("submit",handalogin)