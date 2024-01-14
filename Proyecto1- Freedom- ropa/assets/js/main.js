

// al pulsar el boton de hamburguesa se desliza hacia abajo la lista 
const button= document.querySelector("button");
const nav= document.querySelector("nav");

button.addEventListener("click", ()=>{
    nav.classList.toggle("pulsada");
    
})

//al hacer scroll hacia abajo coge los elementos de la clase mover
window.addEventListener("scroll", ()=>{
    const header = document.querySelector("header");
    header.classList.toggle("mover", window.scrollY>0)
})

const boton = document.querySelector(".btn");
boton.addEventListener("click", ()=>{
   const gracias = document.querySelector(".gracias");

   gracias.classList.add("activo");
   

})



