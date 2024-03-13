var colors = ["#ff002b", "#a5ffd6"];

function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 80,
    origin: { x: 0.25 },
    colors: colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 0.8 },
    colors: colors,
  });

  if (Date.now() < Date.now() + 15000) {
    requestAnimationFrame(frame);
  }
}

function textToggle(){
  $('#text').fadeIn("slow");
}
function animationsToggle(){
  $('#ass').css("animation-play-state", "running");
  $('#hand1').css("animation-play-state", "running");
  $('#hand2').css("animation-play-state", "running");
  $('#ey2').css("animation-play-state", "running");
}
setTimeout(frame, 6000);
setTimeout(textToggle, 6000);
setTimeout(animationsToggle, 6000);

var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: false})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });
