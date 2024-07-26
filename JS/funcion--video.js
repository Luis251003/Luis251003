const botones__video = document.querySelectorAll(".btn-video")
const btn__left = document.querySelector(".arrow--left__container")
const btn__right = document.querySelector(".arrow--right__container")
const btn__cancel = document.querySelector(".x__container")
const contenedor = document.querySelector(".video__container")
const video__carrusel = document.querySelector(".video__carrusel--container")

var video__actual = 0;

botones__video.forEach((boton)=>{
    boton.addEventListener("click",function(){
        contenedor.classList.add("actived")
        video__actual = boton.getAttribute("data-index")
        video__carrusel.style.transform= `translateX(-${video__actual*100}%)`;
        getVideo().play()
    })
})

btn__left.addEventListener("click",function(){
    if(video__actual==0){
        video__actual = 3;
    }else{
        video__actual--
    }
    video__carrusel.style.transform= `translateX(-${video__actual*100}%)`;
})

btn__right.addEventListener("click",function(){
    if(video__actual==3){
        video__actual = 0;
        video__carrusel.style.transform= `translateX(0%)`;
    }else{
        video__actual++
        video__carrusel.style.transform= `translateX(-${video__actual*100}%)`;
    }
})

btn__cancel.addEventListener("click",function(){
    contenedor.classList.remove("actived")
    getVideo().pause()
})

function getVideo(){
    let videos = document.querySelectorAll(".video")
    return videos[video__actual]
}