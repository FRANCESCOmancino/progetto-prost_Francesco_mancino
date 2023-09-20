
let navbar = document.querySelector("#navbar")

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 200) {
        navbar.classList.add("navbarScroll")
    }else{
        navbar.classList.remove("navbarScroll")
    }
} )






AOS.init();