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
// VALIDAR FORM
function validarFormulario() {
    // Obtén los valores de los campos
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Realiza alguna validación básica (puedes expandir esto según tus necesidades)
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Por favor, completa todos los campos");
        return false; // Evita que el formulario se envíe si hay campos vacíos
    }

    // Puedes realizar más validaciones según tus requisitos

    // Si todos los campos están llenos, el formulario se enviará al servidor
    return true;
}




