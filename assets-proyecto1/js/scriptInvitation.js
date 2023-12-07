// Contador
function actualizarContador() {
    const fechaObjetivo = new Date('2023-12-17T14:00:00');
    const fechaActual = new Date();
    const diferencia = fechaObjetivo - fechaActual;

    if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

        const contadorElemento = document.getElementById('contador');
        contadorElemento.innerHTML = `<p>Faltan ${dias} días, ${horas} horas, ${minutos} minutos</p>`;
    } else {
        document.getElementById('contador').innerHTML = '<p>¡La fecha objetivo ha pasado!</p>';
    }
}

function mostrarInvitadosInput(selectElement) {
    const invitadosInput = document.getElementById('invitadosInput');

    if (selectElement.value === 'si') {
        invitadosInput.style.display = 'block';
    } else {
        invitadosInput.style.display = 'none';
    }
}

function enviarFormulario() {
    const asistencia = document.getElementById('asistencia').value;
    let mensaje = asistencia === 'si' ? '¡Confirmación de asistencia!\nAsistiré con ' : 'No podré asistir';

    if (asistencia === 'si') {
        const cantidadInvitados = document.getElementById('cantidadInvitados').value;
        mensaje += `${cantidadInvitados} invitado(s)`;
    }

    enviarMensajeWhatsApp(mensaje);
}



function enviarMensajeWhatsApp(mensaje) {
    const numeroWhatsApp = '3333021896';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
}

function abrirMapa() {
    const mapContainer = document.getElementById('map-container');
    const mapLoader = document.getElementById('loader');
    mapLoader.style.display = 'flex';
    mapContainer.style.display = 'none';

    // Simular una carga asíncrona (puedes reemplazar esto con tu lógica de carga real)
    setTimeout(() => {
        // Oculta el loader después de la simulación de carga
        mapLoader.style.display = 'none';

        // Muestra el mapa después de la simulación de carga
        mapContainer.style.display = 'flex';
    }, 5000); // 5000 milisegundos (simulación de carga)
}



function cerrarMapa() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    setInterval(actualizarContador, 1000);
    actualizarContador();

    const mapIcon = document.getElementById('map-icon');
    const cerrarMapaButton = document.getElementById('cerrarMapa');

    mapIcon.addEventListener('click', function (event) {
        abrirMapa();
        event.stopPropagation();
    });

    cerrarMapaButton.addEventListener('click', function (event) {
        cerrarMapa();
        event.stopPropagation();
    });

    document.addEventListener('click', function () {
        cerrarMapa();
    });
});