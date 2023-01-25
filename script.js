window.onload = function () {
  setInterval("toggleSound()", 100);
};

function toggleSound() {
  var music = document.getElementById("bgm");
  music.play();
}
