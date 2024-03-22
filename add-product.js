let product=JSON.parse(localStorage.getItem('data'))||[]
const handaldata=(e)=>{
    e.preventDefault();

 let data={
  title:document.getElementById('title').value,
  img:document.getElementById('src').value,
  price:document.getElementById('price').value,
  category:document.getElementById('category').value,

  

 }

 product.push(data);

 localStorage.setItem("data",JSON.stringify(product));

 window.location.href="/product.html";

}




let islogin=localStorage.getItem("islogin")
if(islogin){
   document.getElementById("logout").innerHTML="logout"
}

document.getElementById("form").addEventListener("submit",handaldata)