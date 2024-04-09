const videos = {
    1: "video1.mp4",
    2: "video2.mp4",
    3: "video3.mp4"
};

document.addEventListener("keydown", function(event) {
    const keyPressed = event.key;
    const videoElement = document.getElementById("fullScreenVideo");
    if (videos.hasOwnProperty(keyPressed)) {
        document.getElementById("initialImage").style.display = "none";
        videoElement.style.display = "block";
        videoElement.src = videos[keyPressed];
    }
});
