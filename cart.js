let cart = JSON.parse(localStorage.getItem('cart')) || []
const uimaker = (productdata) => {
    
    document.getElementById("container").innerHTML = "";
    
    productdata.map((ele, i) => {
       


        let title = document.createElement("h1")
        title.innerHTML = ele.title

        let img = document.createElement("img")
        img.src = ele.img

        let price = document.createElement("p")
        price.innerHTML = ele.price

         let add=document.createElement("span")
        add.innerHTML="+"

        let qty=document.createElement("span")
        qty.innerHTML=ele.qty
      
        let remove=document.createElement("span")
        remove.innerHTML="-"

        let qtydiv=document.createElement("div")
        qtydiv.append(add,qty,remove)


        let div = document.createElement("div")
        div.append(img, title, price,qtydiv)
        document.getElementById("container").append(div)
       
    })

  
  

}



uimaker(cart)






