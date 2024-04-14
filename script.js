const videos = {
    1: "video1.mp4",
    2: "video2.mp4",
    3: "video3.mp4"
};

// Show initial image when page loads
document.getElementById("initialImage").style.display = "block";
document.getElementById("fullScreenVideo").style.display = "none";

// Listen for keydown events
document.addEventListener("keydown", function(event) {
    const keyPressed = event.key;
    const videoElement = document.getElementById("fullScreenVideo");
    if (videos.hasOwnProperty(keyPressed)) {
        document.getElementById("initialImage").style.display = "none";
        videoElement.style.display = "block";
        videoElement.src = videos[keyPressed];
        // Set playback rate to -1 to play the video backward
        videoElement.playbackRate = -1;
        // Play the video
        videoElement.play();
    }
});
