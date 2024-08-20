let menuVisible = false;
// Función que oculta el menu

function mostrarOcultarMenu(){
    if(menuVisible){
       document.getElementById("nav").classList="";
       menuVisible = false;
    } else{
        document.getElementById("nav").classList="responsive";
       menuVisible = true;
    }
}

function seleccionar (){
    //Ocultar el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}

/* Formulario de Contacto  y MODAL*/



  document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));

    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita el comportamiento por defecto del formulario (enviar datos a un servidor)

      // sirve para vaciar el formulario
      contactForm.reset();

      // muestra el modal
      successModal.show();
    });
  });