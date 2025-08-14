const CLICK_SRC = "/assets/audio/bubble-pop-04-323580.mp3"; 
let audio;
export function playClick() {
  if (!audio) audio = new Audio(CLICK_SRC);
  audio.currentTime = 0; // restarts the sound each click
  audio.play().catch(() => {});
}
