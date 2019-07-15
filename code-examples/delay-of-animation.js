var fps = 15;
function step() {
    setTimeout(function() {
        requestAnimationFrame(step);
        // Drawing code goes here
    }, 1000 / fps);
}
