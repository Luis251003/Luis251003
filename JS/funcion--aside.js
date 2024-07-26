const btn__exit = document.querySelector(".exit__container")
const btn__menu = document.querySelector(".btn-menu")
const enlaces = document.querySelectorAll(".nav__enlace")

btn__exit.addEventListener("click",function(){
    let aside = document.querySelector(".enlaces__container")
    aside.style.transform = "translateX(-100%)";
})

btn__menu.addEventListener("click",function(){
    let aside = document.querySelector(".enlaces__container")
    aside.style.transform = "translateX(0%)";
})

enlaces.forEach((enlace)=>{
    enlace.addEventListener("click",function(){
        let width = window.innerWidth
        if(width<=768){
            let aside = document.querySelector(".enlaces__container")
            aside.style.transform = "translateX(-100%)";
        }
    })
})

function restablecer(){
    let width = window.innerWidth
    if(width>768){
        let aside = document.querySelector(".enlaces__container")
        aside.style.transform = "translateX(0%)";
    }
}

window.addEventListener('resize', restablecer);