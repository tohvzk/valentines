const btn = document.getElementById('toggle');
const cover = document.getElementById('cover');
const vinyl = document.getElementById('vinyl');
const music = document.getElementById('music');

let playing = false;

btn.addEventListener('click', () => {
  if (!playing) {
    cover.style.transform = 'translateX(-80px)';
    vinyl.style.transform = 'translateX(0) rotate(0deg)';
    vinyl.classList.add('spin');
    music.play();
    btn.textContent = 'Pausa';
  } else {
    cover.style.transform = 'translateX(0)';
    vinyl.style.transform = 'translateX(0) rotate(0deg)';
    vinyl.classList.remove('spin');
    music.pause();
    btn.textContent = 'Play';
  }
  playing = !playing;
});
