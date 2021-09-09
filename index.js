window.onload = function () {
    const imagenes = [
        'imagenes/aguja2.jpg',
        'imagenes/hilados.jpg',
        'imagenes/materiales.jpg'
    ];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let botonRetroceder = document.querySelector('#retroceder');
    let botonAvanzar = document.querySelector('#avanzar');
    let imagen = document.querySelector('#imagen');
    let botonPlay = document.querySelector('#play');
    let botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= imagenes.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = imagenes.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        imagen.style.backgroundImage = `url(${imagenes[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        botonAvanzar.setAttribute('disabled', true);
        botonRetroceder.setAttribute('disabled', true);
        botonPlay.setAttribute('disabled', true);
        botonStop.removeAttribute('disabled');
    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        botonAvanzar.removeAttribute('disabled');
        botonRetroceder.removeAttribute('disabled');
        botonPlay.removeAttribute('disabled');
        botonStop.setAttribute('disabled', true);
    }

    // Eventos
    botonAvanzar.addEventListener('click', pasarFoto);
    botonRetroceder.addEventListener('click', retrocederFoto);
    botonPlay.addEventListener('click', playIntervalo);
    botonStop.addEventListener('click', stopIntervalo);

    // Iniciar
    renderizarImagen();
} 

// Menu mobile//
const iconOpenMenu = document.querySelector(".icon-open-menu")
const menuMobile = document.querySelector(".menu-mobile")
const iconCloseMenu = document.querySelector(".fa-times")

iconOpenMenu.onclick = () => {
    menuMobile.style.display = ("block")
}

iconCloseMenu.onclick = () => {
    menuMobile.style.display = ("none")
}

// Modo Oscuro//

const btnModoOscuro = document.getElementById("boton-modo-oscuro")
const btnModoOscuroMobile = document.getElementById("boton-modo-oscuro-mobile")

const fondoBody = document.querySelector("body"); //fondo cambiar a gris
const seccionFondo = document.querySelector(".seccion-fondo"); //fondo cambiar a oscuro
const nav = document.querySelector(".nav");
const titulo = document.querySelectorAll(".titulo");
const subtitulos = document.querySelectorAll(".subtitulos"); //textos cambiar a blanco
const centerTexto = document.querySelectorAll(".center-texto");
const textoArticulo = document.querySelector(".texto-articulo");
const textoFooter = document.querySelector("footer > h3");
const textoContacto = document.querySelector(".texto-contacto");
const colorIconMail = document.querySelector(".fa-envelope")
const colorIconPhone = document.querySelector(".fa-phone")
const colorIconLinkedin = document.querySelector(".fa-linkedin")
const colorIconoMenu = document.querySelector("#icon-menu-mobile");

const cambioColorTitulo = (titulo) => {
    for (let i = 0; i < titulo.length; i++) {
        titulo[i].classList.toggle("fuentes-modo-oscuro")  
    }   
  console.log(titulo) 
}

const cambioColorSubtitulos = (subtitulos) => {
    for (let i = 0; i < subtitulos.length; i++) {
        subtitulos[i].classList.toggle("fuentes-modo-oscuro") 
    }   
  console.log(subtitulos) 
}

const cambioColorTexto = (centerTexto) => {
    for (let i = 0; i < centerTexto.length; i++) {
        centerTexto[i].classList.toggle("fuentes-modo-oscuro") 
        
    }
    console.log(centerTexto) 
}

const cambiarModoOscuro = () => {
    fondoBody.classList.toggle("clase-modo-oscuro")
    seccionFondo.classList.toggle("clase-modo-oscuro")
    textoArticulo.classList.toggle("fuentes-modo-oscuro")
    textoFooter.classList.toggle("fuentes-modo-oscuro")
    textoContacto.classList.toggle("fuentes-modo-oscuro")
    nav.classList.toggle("fondo-modo-oscuro")
    colorIconMail.classList.toggle("fuentes-modo-oscuro")
    colorIconPhone.classList.toggle("fuentes-modo-oscuro")
    colorIconLinkedin.classList.toggle("fuentes-modo-oscuro")
    colorIconoMenu.classList.toggle("fuente-modo-oscuro-mobile")
    cambioColorTitulo(titulo)
    cambioColorSubtitulos(subtitulos)
    cambioColorTexto(centerTexto)
}





btnModoOscuro.onclick = cambiarModoOscuro;
btnModoOscuroMobile.onclick = cambiarModoOscuro;