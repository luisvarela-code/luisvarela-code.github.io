// ----------------- MANEJO DEL FORMULARIO -----------------

document.addEventListener("DOMContentLoaded", function () {

  // 📌 MENU RESPONSIVE (ya lo tenías)
  const navResponsive = document.querySelector('.nav-responsive');
  const nav = document.querySelector('nav');

  navResponsive.addEventListener('click', function () {
    nav.classList.toggle('active');
  });

  // 📄 DESCARGAR CV (ya lo tenías)
  const descargarBtn = document.getElementById("descargar-cv");
  if (descargarBtn) {
    descargarBtn.addEventListener("click", function () {
      const enlace = document.createElement("a");
      enlace.href = "/cv/ResumeLUISALBERTOVARELAVARELA.pdf";
      enlace.download = "ResumeLUISALBERTOVARELAVARELA.pdf";
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
    });
  }

  // 📩 FORMULARIO FORMspREE
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            "Accept": "application/json"
          }
        });

        if (response.ok) {
          alert("¡Mensaje enviado correctamente! Gracias por contactarme.");
          form.reset();
        } else {
          alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
        }

      } catch (error) {
        alert("Error de conexión. Intenta más tarde.");
      }
    });
  }

});
