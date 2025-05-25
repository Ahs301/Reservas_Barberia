// ================================
// Lógica para reservar una cita
// ================================

// Cambia esta URL según tu endpoint real
const ENDPOINT_URL = 'https://xuso18.app.n8n.cloud/webhook/2d98a77c-a474-4b90-a52a-bcbaf794d95c';

// Elementos del DOM
const form = document.getElementById('reservaForm');
const confirmation = document.getElementById('confirmation');

// Manejar el envío del formulario
form.addEventListener('submit', async function(e) {
  e.preventDefault(); // Prevenir recarga de la página
  confirmation.style.display = 'none';

  // Recoger los datos del formulario
  const formData = new FormData(form);

  try {
    // Enviar la información a tu backend
    const res = await fetch(ENDPOINT_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData
    });

    if (res.ok) {
      // Limpiar el formulario y mostrar confirmación
      form.reset();
      confirmation.textContent = '¡Tu cita ha sido reservada con éxito! Pronto nos pondremos en contacto contigo.';
      confirmation.style.display = 'block';
    } else {
      // Error en la respuesta del servidor
      confirmation.textContent = 'Ocurrió un error al enviar la reserva. Inténtalo de nuevo.';
      confirmation.style.display = 'block';
    }
  } catch (error) {
    // Error de conexión o red
    confirmation.textContent = 'No se pudo contactar con el servidor. Intenta más tarde.';
    confirmation.style.display = 'block';
  }
});
