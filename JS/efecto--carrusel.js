const logos__container = document.querySelector(".container--tecnologia")

var cantidad=0;

function carrusel(){

    let ancho = window.innerWidth;
    let total = 3
    if(ancho <= 768){
        total = 6
    }
    if(cantidad == total){
        cantidad = 0;
        logos__container.style.transform =  `translateX(calc(${cantidad*10.5}%))`;
    }else{
        cantidad++
        logos__container.style.transform =  `translateX(calc(-2rem - ${cantidad*10.5}%))`;
    }
}

function iniciar(){
    setInterval(() =>{
        carrusel();
    },"5000")
}

window.addEventListener('load',iniciar)