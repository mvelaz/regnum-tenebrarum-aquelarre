// First call to define "parchment" height
document.onload = ScrollHeight();

// Redraw when viewport is modified
window.addEventListener('resize', function(event){
  ScrollHeight();
});


function ScrollHeight() {
  var content = document.querySelector('#parchment');
  var container = document.querySelector('#contain');

  // SVG feTurbulence can modify all others elements, for this reason "parchment" is in another <div> and in absolute position.
  // so for a better effect, absolute height is defined by his content.
  content.style.height = container.offsetHeight + 'px';
}

function addEventDescarga(id){
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón por su ID
    const downloadButton = document.getElementById(id);
    
    if (downloadButton) {
        // Agregar un listener al clic del botón
        downloadButton.addEventListener('click', function() {
            // Enviar un evento a Google Analytics
            gtag('event', 'click', { 
                'event_category': 'Descarga', 
                'event_label': id 
            });

            // Opcional: Imprimir en consola para verificar
            console.log('Evento de clic registrado en el botón de descarga.');
        });
    } else {
        console.warn('No se encontró un elemento con el ID "descarga_btn".');
    }
});
}

 addEventDescarga('descarga_aventura_btn');
 addEventDescarga('descarga_anexos_btn');
