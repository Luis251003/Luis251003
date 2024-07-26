const botones = document.querySelectorAll(".nav__enlace");

function limpiar(){
    botones.forEach(boton =>{
        boton.classList.remove("selected")
    })
}

botones.forEach(boton =>{
    boton.addEventListener("click",function(){
        const barra = document.querySelector(".barra")
        limpiar()        
        boton.classList.add("selected")
        const value = boton.getAttribute("data-index")
        let total = value * 110
        barra.style.transform = `translateX(${total}px)`
    })
})