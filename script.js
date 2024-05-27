function adjustZoom() {
    var windowWidth = window.innerWidth;
    var zoomLevel = 100;

    if (windowWidth < 1920) {
      zoomLevel = Math.floor((windowWidth / 1920) * 100);
    }
    
    document.body.style.zoom = zoomLevel + "%";
  }

  window.onload = adjustZoom;
  window.onresize = adjustZoom;


document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1) { 
        event.preventDefault(); 
    }
}, { passive: false });

document.addEventListener('dblclick', function(event) {
    event.preventDefault();
}, { passive: false });
