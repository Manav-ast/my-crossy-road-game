import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { DirectionalLight } from "./components/DirectionalLight";
import { player, initializePlayer, unlockMovement } from "./components/Player";
import { map, initializeMap } from "./components/Map";
import { animateVehicles } from "./animateVehicles";
import { animatePlayer } from "./animatePlayer";
import { hitTest } from "./hitTest";
import "./style.css";
import "./collectUserInput";

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = DirectionalLight();
dirLight.target = player;
player.add(dirLight);

const camera = Camera();
player.add(camera);

const scoreDOM = document.getElementById("score");
const highScoreDOM = document.getElementById("high-score");
const resultDOM = document.getElementById("result-container");
const finalHighScoreDOM = document.getElementById("final-high-score");

function getHighScore() {
  return parseInt(localStorage.getItem("highScore") || "0", 10);
}

function setHighScore(score) {
  localStorage.setItem("highScore", score.toString());
}

function updateHighScoreDisplay() {
  if (highScoreDOM) highScoreDOM.innerText = `High Score: ${getHighScore()}`;
}

function updateFinalHighScoreDisplay() {
  if (finalHighScoreDOM) finalHighScoreDOM.innerText = getHighScore();
}

function checkAndUpdateHighScore(currentScore) {
  const highScore = getHighScore();
  if (currentScore > highScore) {
    setHighScore(currentScore);
    updateHighScoreDisplay();
    updateFinalHighScoreDisplay();
  }
}

initializeGame();
updateHighScoreDisplay();

document
  .querySelector("#retry")
  ?.addEventListener("click", () => {
    unlockMovement();
    initializeGame();
  });

window.addEventListener("keydown", (event) => {
  if (
    event.key === " " || event.code === "Space" || event.keyCode === 32
  ) {
    if (resultDOM && resultDOM.style.visibility === "visible") {
      unlockMovement();
      initializeGame();
    }
  }
});

function initializeGame() {
  initializePlayer();
  initializeMap();

  // Initialize UI
  if (scoreDOM) scoreDOM.innerText = "0";
  if (resultDOM) resultDOM.style.visibility = "hidden";
  updateHighScoreDisplay();
}

const renderer = Renderer();
renderer.setAnimationLoop(animate);

function animate() {
  animateVehicles();
  animatePlayer();
  hitTest();

  renderer.render(scene, camera);
}