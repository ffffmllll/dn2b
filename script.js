const videos = {
    1: "video1.mp4",
    2: "video2.mp4",
    3: "video3.mp4"
};

// Function to show initial image
function showInitialImage() {
    document.getElementById("initialImage").style.display = "block";
    document.getElementById("fullScreenVideo").style.display = "none";
}

// Function to show video based on key press
function showVideo(keyPressed) {
    const videoElement = document.getElementById("fullScreenVideo");
    if (videos.hasOwnProperty(keyPressed)) {
        document.getElementById("initialImage").style.display = "none";
        videoElement.style.display = "block";
        videoElement.src = videos[keyPressed];
    }
}

// Show initial image when page loads
showInitialImage();

// Listen for keydown events
document.addEventListener("keydown", function(event) {
    const keyPressed = event.key;
    showVideo(keyPressed);
});
