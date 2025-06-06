function sendEmail(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const templateParams = {
      name: name,
      email: email,
      message: message
    };

    emailjs.send("service_vz29la5", "template_24x5njz", templateParams)
      .then(function(response) {
        alert("Mensagem enviada com sucesso!");
        console.log("SUCCESS!", response.status, response.text);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      }, function(error) {
        alert("Erro ao enviar: " + JSON.stringify(error));
        console.error("FAILED...", error);
      });
  }