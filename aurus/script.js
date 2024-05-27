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
