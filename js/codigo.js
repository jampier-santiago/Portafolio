/*
    --- BOTON INICIO DE LA PAGINA ---

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
    --- ACTIVACIÓN DE LA BARRA DE CARGA Y VISTA DE LOS PROYECTOS --

    Codigo encargado de activar la barra de carga en el momento que el scroll llegue a esa sección y mostrar los proyectos cuando la barra este completa
*/
const $contenedorBarraDeCarga = document.getElementById('contenedor-carga');
const $barraDeCarga = document.getElementById('carga');
const $enlaceProyectos = document.getElementById('enlaceProyectos');
const $segundoEnlaceProyectos = document.getElementById('segundoEnlaceProyectos');
const $tarjetaProyecto = document.getElementsByClassName('tarjeta-proyecto');
let scrollBar;
let mensajeMostrado = false;

$enlaceProyectos.addEventListener('click', activarAnimacion);
$segundoEnlaceProyectos.addEventListener('click', activarAnimacion);

window.addEventListener('scroll', validarScroll)

function validarScroll(){
    window.onscroll = function(){
        scrollBar = document.documentElement.scrollTop;
    }
    console.log(scrollBar)

    if(window.screen.width <= 769){
        if(scrollBar > 1055){
            activarAnimacion();
        }
    }else{
        if(scrollBar > 1150){
            activarAnimacion();
        }
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

 $enlaceCorreo.addEventListener('click', ventanaCorreo);

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
    --- MENU PARA PANTALLAS RESPONSIVE ---

    Codigo encargado del movimiento del menu en las pantallas de mobiles, ademas de el movimiento de la ventana con respecto a la elección de enlaces.
*/
const $botonMenu = document.getElementById('botonMenu');
const $contenedorMenu = document.getElementById('segundoMenu');
const $contenedorMenuEnlaces = document.getElementById('contenedorEnlaces');
const $enlaceHabilidades = document.getElementById('enlaceHabilidades');
const $segundoEnlaceHabilidades = document.getElementById('segundoEnlaceHabilidades');
const $enlaceDeProyectos = $enlaceProyectos;
const $enlaceDeSegundoProyectos = $segundoEnlaceProyectos;
const $enlaceSobreMi = document.getElementById('enlaceSobreMi');
const $segundoEnlaceSobreMi = document.getElementById('segundoEnlaceSobreMi');
const $enlaceContacto = document.getElementById('enlaceContacto');
const $segundoEnlaceContacto = document.getElementById('segundoEnlaceContacto');
let tamaniosPantalla = [320, 375, 425, 768, 1024, 1100, 1440, 2560]
let botonUtilizado = false;

$botonMenu.addEventListener('click', mostrarMenu);
$enlaceHabilidades.addEventListener('click', () => moverA_SeccionDeMenu(1));
$segundoEnlaceHabilidades.addEventListener('click', () => moverA_SeccionDeMenu(1));
$enlaceDeProyectos.addEventListener('click', () => moverA_SeccionDeMenu(2));
$segundoEnlaceProyectos.addEventListener('click', () => moverA_SeccionDeMenu(2));
$enlaceSobreMi.addEventListener('click', () => moverA_SeccionDeMenu(3));
$segundoEnlaceSobreMi.addEventListener('click', () => moverA_SeccionDeMenu(3));
$enlaceContacto.addEventListener('click', () => moverA_SeccionDeMenu(4));
$segundoEnlaceContacto.addEventListener('click', () => moverA_SeccionDeMenu(4))

function moverA_SeccionDeMenu(eleccion){
    if((window.screen.width >= tamaniosPantalla[0]) && (window.screen.width <= (tamaniosPantalla[1] - 1))){
        switch(eleccion){
            case 1:
                window.scrollTo({
                    top: 520,
                    behavior: 'smooth'
                });
            break;
            
            case 2:
                window.scrollTo({
                    top: 1050,
                    behavior: 'smooth'
                });
            break;
    
            case 3:
                window.scrollTo({
                    top: 1480,
                    behavior: 'smooth'
                });
            break;
    
            case 4:
                window.scrollTo({
                    top: 3950,
                    behavior: 'smooth'
                })
            break;
        }
    }else if((window.screen.width >= tamaniosPantalla[1]) && (window.screen.width <= (tamaniosPantalla[2] - 1))){
        switch(eleccion){
            case 1:
                window.scrollTo({
                    top: 522,
                    behavior: 'smooth'
                });
            break;
            
            case 2:
                window.scrollTo({
                    top: 1050,
                    behavior: 'smooth'
                });
            break;
    
            case 3:
                window.scrollTo({
                    top: 1480,
                    behavior: 'smooth'
                });
            break;
    
            case 4:
                window.scrollTo({
                    top: 3950,
                    behavior: 'smooth'
                })
            break;
        }
    }else if((window.screen.width >= tamaniosPantalla[2]) && (window.screen.width <= (tamaniosPantalla[3] - 1))){
        switch(eleccion){
            case 1:
                window.scrollTo({
                    top: 580,
                    behavior: 'smooth'
                });
            break;
            
            case 2:
                window.scrollTo({
                    top: 1120,
                    behavior: 'smooth'
                });
            break;
    
            case 3:
                window.scrollTo({
                    top: 1560,
                    behavior: 'smooth'
                });
            break;
    
            case 4:
                window.scrollTo({
                    top: 4181,
                    behavior: 'smooth'
                })
            break;
        }
    }else if((window.screen.width >= tamaniosPantalla[3]) && (window.screen.width <= (tamaniosPantalla[4] - 1))){
        switch(eleccion){
            case 1:
                window.scrollTo({
                    top: 468,
                    behavior: 'smooth'
                });
            break;
            
            case 2:
                window.scrollTo({
                    top: 1000,
                    behavior: 'smooth'
                });
            break;
    
            case 3:
                window.scrollTo({
                    top: 1424,
                    behavior: 'smooth'
                });
            break;
    
            case 4:
                window.scrollTo({
                    top: 4181,
                    behavior: 'smooth'
                })
            break;
        }
    }else if((window.screen.width >= tamaniosPantalla[4]) && (window.screen.width <= (tamaniosPantalla[5] - 1))){
        switch(eleccion){
            case 1:
                window.scrollTo({
                    top: 468,
                    behavior: 'smooth'
                });
            break;
            
            case 2:
                window.scrollTo({
                    top: 1000,
                    behavior: 'smooth'
                });
            break;
    
            case 3:
                window.scrollTo({
                    top: 1480,
                    behavior: 'smooth'
                });
            break;
    
            case 4:
                window.scrollTo({
                    top: 4181,
                    behavior: 'smooth'
                })
            break;
        }
    }else if((window.screen.width >= tamaniosPantalla[5]) && (window.screen.width <= (tamaniosPantalla[6] - 1))){
        switch(eleccion){
            case 1:
                window.scrollTo({
                    top: 469,
                    behavior: 'smooth'
                });
            break;
            
            case 2:
                window.scrollTo({
                    top: 1000,
                    behavior: 'smooth'
                });
            break;
    
            case 3:
                window.scrollTo({
                    top: 1480,
                    behavior: 'smooth'
                });
            break;
    
            case 4:
                window.scrollTo({
                    top: 4181,
                    behavior: 'smooth'
                })
            break;
        }
    }else if((window.screen.width >= tamaniosPantalla[6]) && (window.screen.width <= tamaniosPantalla[7] - 1)){
        switch(eleccion){
            case 1:
                window.scrollTo({
                    top: 606,
                    behavior: 'smooth'
                });
            break;
            
            case 2:
                window.scrollTo({
                    top: 1245,
                    behavior: 'smooth'
                });
            break;
    
            case 3:
                window.scrollTo({
                    top: 1779,
                    behavior: 'smooth'
                });
            break;
    
            case 4:
                window.scrollTo({
                    top: 3320,
                    behavior: 'smooth'
                })
            break;
        }
    }else{
        switch(eleccion){
            case 1:
                window.scrollTo({
                    top: 606,
                    behavior: 'smooth'
                });
            break;
            
            case 2:
                window.scrollTo({
                    top: 1332,
                    behavior: 'smooth'
                });
            break;
    
            case 3:
                window.scrollTo({
                    top: 2029,
                    behavior: 'smooth'
                });
            break;
    
            case 4:
                window.scrollTo({
                    top: 3565,
                    behavior: 'smooth'
                })
            break;
        }
    }
    $contenedorMenu.style.transform = 'translateX(-100%)';
}

function mostrarMenu(){
    if(botonUtilizado == false){
        $contenedorMenu.style.transform = 'translateX(0)';
        botonUtilizado = true;
    }else{
        $contenedorMenu.style.transform = 'translateX(-100%)';
        botonUtilizado = false;
    }
}