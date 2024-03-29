let product = JSON.parse(localStorage.getItem('data')) || []
let cart = JSON.parse(localStorage.getItem('cart')) || []



const uimaker = (productdata) => {

    document.getElementById("box").innerHTML = "";

    productdata.map((ele, i) => {


        let title = document.createElement("h1")
        title.innerHTML = ele.title

        let img = document.createElement("img")
        img.src = ele.img

        let price = document.createElement("p")
        price.innerHTML = ele.price

        let category = document.createElement("h5")
        category.innerHTML = ele.category

        let del = document.createElement("button")
        del.innerHTML = "delete"
     

        let btn = document.createElement("button")
        btn.innerHTML = "BUY NOW"
        btn.addEventListener("click",()=>{
            cart.push({...ele,qty:1});
            localStorage.setItem("cart",JSON.stringify(cart))
        })

        del.addEventListener("click", () => {
            product.splice(i, 1)
            uimaker(product);
            localStorage.setItem("data", JSON.stringify(product));

        })


       
        let div = document.createElement("div")
        div.append(img, title, price, category, del, btn)
         div.setAttribute("class", "data");
       document.getElementById("box").append(div)

    })

}

let islogin = localStorage.getItem("islogin")
if (islogin) {
    document.getElementById("logout").innerHTML = "logout"
}
uimaker(product)


// serchiong &sorting
const handalsorting=(val)=>{
    if(val=="htl"){
        product.sort((a,b)=>b.price-a.price)
       uimaker(product)
    }
}
const handalsortingg=(val)=>{
    if(val=="lth"){
        product.sort((a,b)=>a.price-b.price)
       uimaker(product)
    }

}
//    filtering data 
const handalfilter=(val)=>{
    let temp=product.filter((ele)=>ele.category==val)
    uimaker(temp);
}

// serching data

const search=(val)=>{
    let temp=product.filter((ele)=>ele.title.includes(val))
    uimaker(temp)
}
const handalserch=(e)=>{
    e.preventDefault()
    let title=document.getElementById("search-value").value
    search(title)
}


document.getElementById("htl").addEventListener("click",()=>handalsorting("htl"))
document.getElementById("lth").addEventListener("click",()=>handalsortingg("lth"))
document.getElementById("kids").addEventListener("click",()=>handalfilter("kids"))
document.getElementById("male").addEventListener("click",()=>handalfilter("male"))
document.getElementById("female").addEventListener("click",()=>handalfilter("female"))
document.getElementById("search").addEventListener("submit",handalserch)