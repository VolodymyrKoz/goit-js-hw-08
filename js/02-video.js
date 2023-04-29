import { Player } from "@vimeo/player/dist/player.js";
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

player.on(
  "timeupdate",
  throttle(() => {
    const currentTime = JSON.stringify(player.getCurrentTime());
    localStorage.setItem("videoplayer-current-time", currentTime);
  }, 1000)
);

const currentTime = localStorage.getItem("videoplayer-current-time");
if (currentTime) {
  player.setCurrentTime(JSON.parse(currentTime));
}
