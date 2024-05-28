
// Fix dello zoom su monitor con risoluzione piu bassa

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


  // Codice che non fa piu dezoommare

  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
        event.preventDefault();
    }
}, false);

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
}, false);

document.addEventListener('gesturechange', function(event) {
    event.preventDefault();
}, false);

document.addEventListener('gestureend', function(event) {
    event.preventDefault();
}, false);
