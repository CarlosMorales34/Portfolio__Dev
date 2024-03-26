// MAPA
document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout( () => {
        document.querySelector("#load-iframe-map").innerHTML = `
    <iframe class="contact__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4437.849127164688!2d-103.34532817217432!3d20.719504575607292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b03115b04dc3%3A0x4f5ca91c696ea856!2sAgust%C3%ADn%20Rivera%2C%20El%20Bat%C3%A1n%2C%2045190%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1698438792976!5m2!1ses-419!2smx"   frameborder="0" scrolling="no" marginheigth="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
    }, 3000);
    
});
// TOGGLE
document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector(".layout__menu-toggle");
    let icon_bars = document.querySelector(".layout__menu-toggle .fa-bars");
    let icon_mark = document.querySelector(".layout__menu-toggle .fa-xmark");
    let aside = document.querySelector(".layout__aside");
    
    button.addEventListener("click", (event) => {
        let visible = document.querySelector(".layout__aside--visible");
        if (!visible){
            aside.classList.add("layout__aside--visible");
            icon_bars.style.opacity = 0;
            icon_mark.style.opacity = 1;
        } else{
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity = 1;
            icon_mark.style.opacity = 0;
        }
        });
         // RESIZE
    window.addEventListener("resize", () => {
        let size = parseInt(document.body.clientWidth);
        if(size <= 1060){
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity = 1;
            icon_mark.style.opacity = 0;
        }
    });
});
// EFECTO TEXTO
const frasesDesarrollador = [
    "Desarrollador web",
    "Apasionado por la tecnología",
    "Constructor de soluciones digitales",
    "Innovador en el mundo web",
    "Python, JS, Flask, HTML/CSS"
  ];

  function escribirTexto(elemento, texto, velocidad) {
    elemento.innerHTML = "";
    const longitud = texto.length;
    let i = 0;

    function agregarLetra() {
      elemento.innerHTML += texto.charAt(i);
      i++;

      if (i < longitud) {
        setTimeout(agregarLetra, velocidad);
      }
    }

    agregarLetra();
  }

  function mostrarTexto(elemento) {
    elemento.style.opacity = 1;
  }

  function cambiarFraseDesarrollador(elemento, frases, velocidad) {
    let indiceFrase = 0;

    function cambiarFrase() {
      const fraseActual = frases[indiceFrase];
      escribirTexto(elemento, fraseActual, velocidad);
      indiceFrase = (indiceFrase + 1) % frases.length;
    }

    setInterval(cambiarFrase, 3000); // Cambia la frase cada 5 segundos
  }

  function iniciarEscritura() {
    const nombreElemento = document.getElementById("frase1");
    const jobElemento = document.getElementById("frase2");
    const velocidad = 50;

    mostrarTexto(nombreElemento);
    setTimeout(() => {
      mostrarTexto(jobElemento);
      escribirTexto(jobElemento, frasesDesarrollador[0], velocidad);
      cambiarFraseDesarrollador(jobElemento, frasesDesarrollador, velocidad);
    }, 1000); // Espera 1 segundo antes de mostrar y escribir el segundo elemento
  }

  iniciarEscritura();






