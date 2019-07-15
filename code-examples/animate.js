function animate(options) {

  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    var progress = options.timing(timeFraction)

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
// example of using the function
// animate({
//   duration: 1000,
//   timing: function(timeFraction) {
//     return timeFraction;
//   },
//   draw: function(progress) {
//     elem.style.width = progress * 100 + '%';
//   }
// });
