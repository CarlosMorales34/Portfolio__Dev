import { Resend } from 'resend';

const resend = new Resend('re_7DViJ2pv_7ZywKjk7uHEBQCHQexXXr53f');

document.querySelector('.form__button').addEventListener('click', () => {
    console.log("btn clickeado");
    // Obtener los valores del formulario
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("subject").value;
    const mensaje = document.getElementById("message").value;

    // Enviar el correo electrónico utilizando los datos del formulario
    resend.emails.send({
        from: `${nombre} <${email}>`,
        to: 'carlosmorales@carlosdevportfolio.com',
        subject: asunto,
        html: `<p>${mensaje}</p>`
    }).then(response => {
        console.log("Correo enviado exitosamente:", response);
        alert("Correo enviado exitosamente");
    }).catch(error => {
        console.error("Error al enviar el correo:", error);
        alert("Error al enviar el correo");
    });
});
