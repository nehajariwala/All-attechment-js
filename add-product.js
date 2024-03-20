let product=JSON.parse(localStorage.getItem('data'))||[]
const handaldata=(e)=>{
    e.preventDefault();

 let data={
  title:document.getElementById('title').value,
  img:document.getElementById('src').value,
  price:document.getElementById('price').value,


 }

 product.push(data);

 localStorage.setItem("data",JSON.stringify(product));

}






document.getElementById("form").addEventListener("submit",handaldata)