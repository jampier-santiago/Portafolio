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
const $enlaceSegundoMenuProyctos = document.getElementById('segundoEnlaceProyectos');
const $tarjetaProyecto = document.getElementsByClassName('tarjeta-proyecto');
let scrollBar;
let mensajeMostrado = false;

$enlaceDeProyectos.addEventListener('click', activarAnimacion);
$enlaceSegundoMenuProyctos.addEventListener('click', activarAnimacion);

window.addEventListener('scroll', validarScroll)

function validarScroll(){
    window.onscroll = function(){
        scrollBar = document.documentElement.scrollTop;
    }
    console.log(scrollBar)

    if(scrollBar > 1000){
        activarAnimacion();
    }
}

function activarAnimacion(){
    if(window.screen.width <= 769){
        if(mensajeMostrado == false){
            alert('Para ver los proyectos toque la imagen deseada');
            $contenedorBarraDeCarga.style.animationName = 'barraColor';
            $barraDeCarga.style.animationName = 'barraDeCarga';
            mostrarProyectos();
            mensajeMostrado = true;
        }else{
            $contenedorBarraDeCarga.style.animationName = 'barraColor';
            $barraDeCarga.style.animationName = 'barraDeCarga';
            mostrarProyectos();
        }
    }else{
        $contenedorBarraDeCarga.style.animationName = 'barraColor';
        $barraDeCarga.style.animationName = 'barraDeCarga';
        mostrarProyectos();
    }

}

function mostrarProyectos(){
    for(let i = 0; i < $tarjetaProyecto.length; i++){
        $tarjetaProyecto[i].style.animationName = 'aparecer';
    }
}

/*
    --- VENTANAS EMERGENTES ---

    Codigo encargado de desplegar las ventanas emergentes de la seccion de contactos
*/
 const $enlaceCorreo = document.getElementById('correo');
 const $enlaceWhatsapp = document.getElementById('whatsapp');

 $enlaceCorreo.addEventListener('click', ventanaCorreo);
 $enlaceWhatsapp.addEventListener('click', ventanaWhatsapp);


function ventanaCorreo(){
    swal ({
        title: "¡Contactame!",
        text: "Escribeme y me pondre en contacto lo más pronto posible (jampiersantiago@gmail.com)",
        icon: "success",
        button: "Continuar"
    });
}

function ventanaWhatsapp(){
    swal ({
        title: "¡Contactame!",
        text: "Escribeme y me pondre en contacto lo más pronto posible (3024596562)",
        icon: "success",
        button: "Continuar"
    });
}

/* 
MENU PARA PANTALLAS RESPONSIVE

Codigo encargado del movimiento del menu en las pantallas de mobiles
*/
const $botonMenu = document.getElementById('botonMenu');
const $contenedorMenu = document.getElementById('segundoMenu');
let botonUtilizado = false;

$botonMenu.addEventListener('click', mostrarMenu);

function mostrarMenu(){
    if(botonUtilizado == false){
        $contenedorMenu.style.transform = 'translateX(0)';
        botonUtilizado = true;
    }else{
        $contenedorMenu.style.transform = 'translateX(-100%)';
        botonUtilizado = false;
    }
}