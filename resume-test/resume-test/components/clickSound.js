import { asset } from "../utils/asset";

const CLICK_SRC = asset("assets/audio/bubble-pop-04-323580.mp3"); 
let audio;
export const playClick = () => {
  try {
    audio = audio || new Audio(clickUrl);
    audio.currentTime = 0;
    audio.volume = 0.25; 
    audio.play();
  } catch {}
};
