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


/* add item to the list */


