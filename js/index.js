// Obtener la imagen en la que se hará clic
var scrollLink = document.getElementById("scroll-link");

// Función para redirigir a la página cuando se hace clic en la imagen
scrollLink.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    window.location.href = this.href; // Redirigir a la página especificada en el atributo href
});

// Función para redirigir a la página cuando se hace scroll
window.addEventListener("scroll", function() {
    // Verificar si el usuario ha llegado al fondo de la página (o cualquier otra posición deseada)
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Redirigir a la página especificada
        window.location.href = scrollLink.href;
    }
});
