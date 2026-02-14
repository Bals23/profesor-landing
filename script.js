emailjs.init("cpSCquBBFRj9lwNG6");

document.querySelector(".contacto-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_jnsdsan", "template_r83f1kj", this)
        .then(function() {
            alert("Mensaje enviado correctamente");
        }, function(error) {
            alert("Error al enviar mensaje");
            console.log(error);
        });
});
