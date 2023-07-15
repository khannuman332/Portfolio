const tooglebutton = document.getElementsByClassName('toogle-button')[0]
const navlinks = document.getElementsByClassName('navbar')[0]

tooglebutton.addEventListener('click',()=>{
    navlinks.classList.toggle('active')
})
    const navlink = document.querySelectorAll(".navbar").forEach(n=>n.addEventListener("click",()=>{
        navlinks.classList.toggle("active")
        
    }))
   