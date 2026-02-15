emailjs.init("cDEMO");

document.querySelector(".contacto-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_DEMO", "template_demo", this)
        .then(function() {
            alert("Mensaje enviado correctamente");
        }, function(error) {
            alert("Error al enviar mensaje");
            console.log(error);
        });
});
