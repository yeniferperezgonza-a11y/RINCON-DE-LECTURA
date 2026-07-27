// =======================================
// RINCÓN DE LECTURA
// script.js
// =======================================

// ---------- Contador de lectores ----------
let lectores = localStorage.getItem("lectores");

if (lectores === null) {
    lectores = 0;
}

document.addEventListener("DOMContentLoaded", () => {

    const contador = document.getElementById("lectores");

    if (contador) {
        contador.textContent = lectores;
    }

});

// ---------- Botón Leer ----------

const botonLeer = document.querySelector(".leer");

if (botonLeer) {

    botonLeer.addEventListener("click", () => {

        lectores++;

        localStorage.setItem("lectores", lectores);

    });

}

// ---------- Saludo ----------

window.addEventListener("load", () => {

    const hora = new Date().getHours();

    let saludo = "";

    if (hora < 12) {

        saludo = "🌞 ¡Buenos días!";

    }

    else if (hora < 18) {

        saludo = "☀️ ¡Buenas tardes!";

    }

    else {

        saludo = "🌙 ¡Buenas noches!";

    }

    console.log(saludo + " Bienvenido al Rincón de Lectura.");

});

// ---------- Animación de botones ----------

const botones = document.querySelectorAll("a");

botones.forEach((boton)=>{

    boton.addEventListener("mouseenter",()=>{

        boton.style.transition=".3s";

    });

});

// ---------- Mensaje descarga ----------

const descargar = document.querySelector(".descargar");

if(descargar){

descargar.addEventListener("click",()=>{

alert("📥 La descarga comenzará en unos segundos.");

});

}

// ---------- Scroll suave ----------

document.querySelectorAll('a[href^="#"]').forEach(enlace=>{

enlace.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

destino.scrollIntoView({

behavior:"smooth"

});

});

});

// ---------- Mostrar año automático ----------

const año=document.getElementById("año");

if(año){

año.textContent=new Date().getFullYear();

}