let cart = JSON.parse(localStorage.getItem('cart')) || []

const handalqty=(opr,index)=>{

    console.log(opr,index)
    if(opr=="+"){
        cart[index].qty+=1
    }
    else{
     if(cart[index].qty == 1){
        cart.splice(index,1)
     }
     else{
        cart[index].qty -= 1
     }
    }
    uimaker(cart)
    localStorage.setItem("cart",JSON.stringify(cart))


}

const uimaker = (productdata) => {
    let totalprice=0
    document.getElementById("container").innerHTML = "";
    
    productdata.map((ele, index) => {
       
      totalprice += ele.price * ele.qty

      

        let title = document.createElement("h1")
        title.innerHTML = ele.title

        let img = document.createElement("img")
        img.src = ele.img

        let price = document.createElement("p")
        price.innerHTML = ele.price

        
        let btn1=document.createElement("button")
        btn1.innerHTML=totalprice
       btn1.setAttribute("class","btn1")


         let add=document.createElement("span")
        add.innerHTML="+"
        add.addEventListener("click",()=>handalqty("+",index))
        let qty=document.createElement("span")
        qty.innerHTML=ele.qty
      
    
         
        let remove=document.createElement("span")
        remove.innerHTML="-"
        remove.addEventListener("click",()=>handalqty("-",index))
        let qtydiv=document.createElement("div")
        qtydiv.append(add,qty,remove)


        let div = document.createElement("div")
        div.append(img, title, price,qtydiv,btn1)
        document.getElementById("container").append(div)

        
       
    })

  
 
  



}
let islogin = localStorage.getItem("islogin")
if (islogin) {
    document.getElementById("logout").innerHTML = "logout"
}


uimaker(cart)






