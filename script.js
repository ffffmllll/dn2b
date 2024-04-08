const images = {
    1: "1.webp",
    2: "2.webp",
    3: "3.webp"
};

document.addEventListener("keydown", function(event) {
    const keyPressed = event.key;
    if (images.hasOwnProperty(keyPressed)) {
        document.getElementById("fullScreenImage").src = images[keyPressed];
    }
});