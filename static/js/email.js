document.getElementById('msgBtn').addEventListener('click', function() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Encode the message
    const encodedMessage = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`
    );
  
    // WhatsApp URL
    const whatsappURL = `https://wa.me/523333720692?text=${encodedMessage}`;
  
    // Redirect to WhatsApp
    window.location.href = whatsappURL;
  });