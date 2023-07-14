document.addEventListener("DOMContentLoaded", function() {
    var screen = document.getElementById("screen");
    var videoOptions = document.getElementById("videoOptions");
    var playButton = document.getElementById("playButton");
  
    playButton.addEventListener("click", function() {
      var selectedVideo = videoOptions.value;
      if (selectedVideo) {
        screen.innerHTML = '<video width=1000" height="600" controls><source src="' + selectedVideo + '" type="video/mp4"></video>';
      }
    });
  });