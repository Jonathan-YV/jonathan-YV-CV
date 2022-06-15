const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_y1u6lwm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Mensaje enviado!',
        showConfirmButton: false,
        timer: 1500,
        color:"#FFFFFF",
        background: "#202020"
      })
    }, (err) => {
      btn.value = 'Enviar';
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al enviar mensaje',
        showConfirmButton: false,
        timer: 1500,
        color:"#FFFFFF",
        background: "#202020"
      })
    });
});