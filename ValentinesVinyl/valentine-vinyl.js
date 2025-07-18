document.addEventListener('DOMContentLoaded', () => {
    fetch("./vinyl.png")
      .then((response) => response.text())
      .then((png) => {
        const playerContainer = document.getElementById("player-container");
        playerContainer.innerHTML = png;

        const vinyl = document.querySelector("png");
        const playButton = document.getElementById("play-button");
        const audio = document.getElementById("love-song");
        let isPlaying = false;

        playButton.addEventListener("click", () => {
          if (!isPlaying) {
            vinyl.style.animation = "spin 2s linear infinite";

            audio.play();

            playButton.textContent = "Pause";
            isPlaying = true;
          } else {
            vinyl.style.animation = "";

            audio.pause();

            playButton.textContent = "Play";
            isPlaying = false;
          }
        });
      })
      .catch((err) => console.error("Error loading PNG:", err));
});
