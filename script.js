let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let bandera = 0;

boton.addEventListener("click",function(e){
    e.preventDefault();

    if(bandera == 0){
        enlaces.className = ("enlaces dos");
        bandera = 1;
    }else{
        enlaces.className = ("enlaces uno");
        bandera = 0;
    }
})