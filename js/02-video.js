// Import Vimeo player library and lodash.throttle
import Player from "@vimeo/player";
import { throttle } from "lodash";

// Initialize Vimeo player
const player = new Player("vimeo-player");

// Get the current playback time from local storage
let currentTime = localStorage.getItem("videoplayer-current-time") || 0;

// Set the playback time on the player
player.setCurrentTime(currentTime);

// Listen for time updates and save the current time to local storage
player.on(
  "timeupdate",
  throttle(function (data) {
    currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
  }, 1000)
);
