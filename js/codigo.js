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
    --- Activación de la barra de carga

    Codigo encargado de activar la barra de carga en el momento que el scroll llegue a esa sección
*/
const $contenedorBarraDeCarga = document.getElementById('contenedor-carga');
const $barraDeCarga = document.getElementById('carga');
let scrollBar;

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
}