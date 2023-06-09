/* menu */
const openMenu = document.querySelector(".open")
const closemenu = document.querySelector(".close")
const popMenu = document.querySelector(".menu-popup")
const navList = document.querySelector(".links")
const nav = document.querySelector(".nav")
openMenu.addEventListener("click",()=> {
    popMenu.classList.add("menu-popup-active")
    popMenu.appendChild(navList)
    navList.classList.add("links-sidebar")
})
closemenu.addEventListener("click",()=> {
    popMenu.classList.remove("menu-popup-active")
    popMenu.removeChild(navList)
    navList.classList.remove("links-sidebar")
    nav.appendChild(navList)

})

/* mobile slides / desktop */
const nextbtn = document.querySelector(".next")
const prevbtn = document.querySelector(".prev") 
const slides = document.querySelectorAll(".slide")
let  slidesNav = document.querySelectorAll(".slide-nav")
slidesNav = Array.from(slidesNav)


function removeprevslide() {
    slides.forEach((singlenav)=> {
        singlenav.classList.remove("slide-active")
    })

}
let currentindex = 0

nextbtn.addEventListener("click",() => {
    slides[currentindex].classList.remove("slide-active")
    currentindex = (currentindex + 1) % slides.length
    slides[currentindex].classList.add("slide-active")

})

prevbtn.addEventListener("click",() => {
    slides[currentindex].classList.remove("slide-active")
    currentindex = (currentindex - 1 + slides.length) % slides.length
    slides[currentindex].classList.add("slide-active")

})

slidesNav.forEach((singleNav)=> {
    singleNav.addEventListener("click",() => {
        let findidex = slidesNav.indexOf(singleNav)
        removeprevslide()
        slides[findidex].classList.add("slide-active")
        

    })

})

/* model  */
const overlay  = document.querySelector(".overlay")
const model = document.querySelector(".model")
const slideContainer = document.querySelector(".slide-container")



slides.forEach((slide)=> {
    slide.addEventListener("click", addmodel)

})

function addmodel() {
    console.log("hi")

}
/* header items hover effect */
const linkItem = document.querySelectorAll(".link-item")
const linkHover = document.querySelectorAll(".link-hover")


function removeprev() {
    linkHover.forEach((hover)=> {
        hover.classList.remove("link-hover-active")
    })
}
linkItem.forEach((link)=> {
    link.addEventListener("click",()=> {
        sister = link.nextElementSibling
        removeprev()
        sister.classList.add("link-hover-active")
    })
})


/* All cart functionality is here adding or removeing and updading the cart container */
const cartOpen = document.querySelector(".cart-img")
const cartclose = document.querySelector(".cart-flex")
const cartContainer = document.querySelector(".cart-container")
const cartFill = document.querySelector(".cart-fill")
const cartUnfill = document.querySelector(".cart-unfill")
const total = document.querySelector(".total")
const multiply = document.querySelector(".multiply")
const deleteBuyin = document.querySelector(".delete")
const notification = document.querySelector(".item-taken")



const plusNum = document.querySelector(".plus")
const minusNum = document.querySelector(".minus")
const Num = document.querySelector(".number")
const submit = document.querySelector(".submit")

cartOpen.addEventListener("click",showCart)
cartclose.addEventListener("click",hideCart)

let totalItem = 0;
plusNum.addEventListener("click",()=> {
    totalItem += 1
    AddItemPurchase(totalItem)
})

minusNum.addEventListener("click",()=> {
    totalItem -= 1
    AddItemPurchase(totalItem)

})


submit.addEventListener("click", orderComplete)
deleteBuyin.addEventListener("click",() => {
    notification.classList.remove("item-taken-active")
    notification.textContent = 0
    cartFill.classList.remove("cart-fill-active")
    cartUnfill.classList.remove("cart-unfill-unactive")

})

function showCart() {
    cartContainer.classList.add("cart-popup")
}
function hideCart() {
    cartContainer.classList.remove("cart-popup")

}
function AddItemPurchase(value) {
    if (value <= 0) {
        value = 0
    } 
    Num.textContent = value
}

function orderComplete() {

    if (totalItem <= 0) {
        notification.classList.remove("item-taken-active")
    } else if (totalItem >= 1) {
        notification.classList.add("item-taken-active")
        notification.textContent = totalItem
    }
    if (totalItem <= 0 ) {
        cartFill.classList.remove("cart-fill-active")
        cartUnfill.classList.remove("cart-unfill-unactive")
    } 
    if (totalItem >= 1) {
        console.log("2")
        cartUnfill.classList.add("cart-unfill-unactive")
        cartFill.classList.add("cart-fill-active")
        multiply.textContent = totalItem + " "
        total.textContent = (totalItem * 125) + ".00"
    }


}

