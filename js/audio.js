export const audio = (() => {
  let music = null;
  let audio = null;
  let isPlay = false;

  let music_list = [
    "sound.mp3",
    "https://eta.vgmtreasurechest.com/soundtracks/professor-layton-and-the-last-specter/aykiszhjwj/05%20Puzzles%205.mp3",
    "https://eta.vgmtreasurechest.com/soundtracks/professor-layton-and-the-last-specter/fcpndkmlmx/06%20A%20Strange%20Story.mp3",
    "https://kappa.vgmsite.com/soundtracks/professor-layton-and-the-miracle-mask/qhmeefaxsu/04.%20Monte%20D%27Or%20-%20Carnival%20Night.mp3",
    "https://kappa.vgmsite.com/soundtracks/atelier-firis-the-alchemist-and-the-mysterious-journey-ps-vita-ps4-gamerip-2016/mvjxbpslmb/012.%20A17%20Fm%20Bar01%20A.mp3",
    "https://eta.vgmtreasurechest.com/soundtracks/professor-layton-and-the-last-specter/zaulkxkmhb/14%20Town%20of%20Mist%20~Misthallery%20Night.mp3",
    "https://kappa.vgmsite.com/soundtracks/professor-layton-and-the-diabolical-box-hd/maztblywpc/01.%20Pandora%27s%20Box.mp3",
    "https://eta.vgmtreasurechest.com/soundtracks/game-music-best-collection-rpg-v/lcnxqjwm/02%20mealodies%20of%20life%20%28english%29.mp3",
  ];

  const randomElement =
    music_list[Math.floor(Math.random() * music_list.length)];

  const musicLink = randomElement.startsWith("http")
    ? randomElement
    : "./assets/music/" + randomElement;

  const init = () => {
    music = document.getElementById("button-music");

    // audio = new Audio(music.getAttribute("data-url"));
    audio = new Audio(musicLink);
    audio.currentTime = 0;
    audio.autoplay = false;
    audio.muted = false;
    audio.loop = true;
    audio.volume = 1;
    audio.controls = false;
    audio.preload = "auto";
  };

  const play = async () => {
    music.disabled = true;
    try {
      await audio.play();
      isPlay = true;
    } catch (err) {
      isPlay = false;
      alert(err);
    }
    music.disabled = false;
  };

  const button = async () => {
    if (!isPlay) {
      await play();
      music.innerHTML = '<i class="fa-solid fa-circle-pause spin-button"></i>';
      return;
    }

    isPlay = false;
    audio.pause();
    music.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
  };

  const showButton = () => {
    music.style.display = "block";
  };

  return {
    init,
    play,
    button,
    showButton,
  };
})();
