//nav
let ubicacionPrincipal = window.pageXOffset; //0

  AOS.init();

window.addEventListener('scroll', () => {
    let desplazamientoActual = window.pageYOffset; //mide 100
    if(ubicacionPrincipal>=desplazamientoActual){ //100 es mayo a 100
        document.getElementsByTagName('nav')[0].style.top = '0px'; 
    }else{
        document.getElementsByTagName('nav')[0].style.top = '-100px'
    }
    ubicacionPrincipal= desplazamientoActual; // 100
})

// Menu Hamburguesa

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", (e) =>{
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
     
    }

 
    enlacesHeader.classList.toggle("menudos")
    enlacesHeader.classList.remove.toggle("menudos")


    
 
})


