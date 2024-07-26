const inputs = document.querySelectorAll(".input")
inputs.forEach(input=>{
    input.addEventListener("input",function(){
        if(input.value.trim() !== ''){
            input.classList.add("active")
        }else{
            input.classList.remove("active")
        }
    })
})