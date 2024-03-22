let product=JSON.parse(localStorage.getItem('data'))||[]


const uimaker=()=>{

    document.getElementById("box").innerHTML="";
   
        product.map((ele,i) => {
      

        let title=document.createElement("h1")
        title.innerHTML=ele.title

        let img=document.createElement("img")
        img.src=ele.img

        let price=document.createElement("p")
        price.innerHTML=ele.price

        let category=document.createElement("h5")
        category.innerHTML="ADD-CART"

        let del=document.createElement("button")
        del.innerHTML="delete"
  
      
        del.addEventListener("click",()=>{
          product.splice(i,1)
          uimaker();
          localStorage.setItem("data",JSON.stringify(product));
  
        })
         
        
    
         
        let div=document.createElement("div")
        div.append(img,title,price,category, del)

        div.setAttribute("class","data");


        document.getElementById("box").append(div)

    })
     
    }

    let islogin=localStorage.getItem("islogin")
if(islogin){
   document.getElementById("logout").innerHTML="logout"
}
    uimaker()