/*
    --- Boton inicio de la pagina ---

    Codigo encargado de detectar el click del usuario y llevar la ventana a su posicion inicial
*/
const $botonSubir = document.getElementById('botonSubir');
$botonSubir.addEventListener('click', subir);

window.addEventListener('scroll', compararScroll);

function compararScroll(){
    if(document.documentElement.scrollTop > 500){
        $botonSubir.style.display = "flex";
    }else{
        $botonSubir.style.display = "none";
    }
}

function subir(){
    window.scrollTo({
        top: 0, 
        behavior: "smooth"    
    })
}

/* 
    --- MOVIMIENTO DEL SLIDER DE HABILIDADES ---

    Parte del codigo encargada de mover los contenedores de habilidades con respecto a la necesidad des usuario
*/
const $botonDerecho = document.getElementById('derecha');
const $botonIzquierdo = document.getElementById('izquierda');
const $contenedores = document.getElementsByClassName('tarjeta-habilidad');
let posicion = 0;

$botonDerecho.addEventListener('click', avanzar);
$botonIzquierdo.addEventListener('click', retroceder);

function avanzar(){
    posicion += 100;
    if(posicion == 700){
        posicion = 0;
    }
    for(let i = 0; i < $contenedores.length; i++){
        $contenedores[i].style.transform = `translateX(-${posicion}%)`;
    }
    console.log(posicion);
}

function retroceder(){
    posicion -= 100;
    if(posicion == -100){
        posicion = 600;
    }
    for(let i = 0; $contenedores.length; i++){
        $contenedores[i].style.transform = `translateX(-${posicion}%)`;
    }
    console.log(posicion);
}

/*
    --- Activación de la barra de carga y mostrar los proyectos

    Codigo encargado de activar la barra de carga en el momento que el scroll llegue a esa sección y mostrar los proyectos cuando la barra este completa
*/
const $contenedorBarraDeCarga = document.getElementById('contenedor-carga');
const $barraDeCarga = document.getElementById('carga');
const $enlaceDeProyectos = document.getElementById('enlaceProyectos');
const $tarjetaProyecto = document.getElementsByClassName('tarjeta-proyecto');
let scrollBar;

$enlaceDeProyectos.addEventListener('click', activarAnimacion);

window.addEventListener('scroll', validarScroll)

function validarScroll(){
    window.onscroll = function(){
        scrollBar = document.documentElement.scrollTop;
    }
    console.log(scrollBar)

    if(scrollBar > 800){
        activarAnimacion();
    }
}

function activarAnimacion(){
    $contenedorBarraDeCarga.style.animationName = 'barraColor';
    $barraDeCarga.style.animationName = 'barraDeCarga';
    mostrarProyectos();
}

function mostrarProyectos(){
    for(let i = 0; i < $tarjetaProyecto.length; i++){
        $tarjetaProyecto[i].style.animationName = 'aparecer';
    }
}