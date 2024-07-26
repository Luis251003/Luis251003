const imagen1 = document.querySelector(".img__container-about-me")

const cargarImagen = (entradas, observador) => {
    entradas.forEach((entrada)=>{
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImagen,{
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
});

observador.observe(imagen1);