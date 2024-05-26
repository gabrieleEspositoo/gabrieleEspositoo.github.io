function adjustZoom() {
    var windowWidth = window.innerWidth;
    var zoomLevel = 100;

    // Regola lo zoom in base alla larghezza della finestra
    if (windowWidth < 1920) {
      zoomLevel = Math.floor((windowWidth / 1920) * 100);
    }

    // Applica lo zoom
    document.body.style.zoom = zoomLevel + "%";
  }

  // Richiama la funzione al caricamento della pagina e al ridimensionamento della finestra
  window.onload = adjustZoom;
  window.onresize = adjustZoom;
