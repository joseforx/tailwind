const hamburger= document.querySelector("#hamburger")
const menu= document.querySelector("#menu")
const menu= document.queryall("#hlink")

hamburger.addEventListener("click", ()=>{    
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
} )

hlinks.array.forEach(link => {
    link.addEventListener("click", ()=>{    
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    } )
});