/* dom */

const divCont = document.getElementById('contenedor');

let logo = document.createElement('img');
logo.src = "img/logoUno.png";
logo.alt = 'primer foto';
logo.classList.add('foto');
divCont.appendChild(logo);


let boton = document.createElement('button');
boton.innerText = "Cumbia en el Caribe!";
boton.classList.add('botoni');
divCont.appendChild(boton);


const direcciones = ["img/logoUno.png", "img/logoDos.png", "img/logoTres.png", "img/logoCuatro.png"];


let contador = 0; //cantidad de clicks que quiero manejar
boton.addEventListener('click', cambiarFoto);


function cambiarFoto() {    
    
    contador++;

    if(contador >= direcciones.length) {
        contador = 0;
    }
    
    logo.src = direcciones[contador];

}    


    
