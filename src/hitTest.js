import * as THREE from "three";
import { metadata as rows } from "./components/Map";
import { player, position, lockMovement } from "./components/Player";

const resultDOM = document.getElementById("result-container");
const finalScoreDOM = document.getElementById("final-score");
const finalHighScoreDOM = document.getElementById("final-high-score");

function getHighScore() {
    return parseInt(localStorage.getItem("highScore") || "0", 10);
}

function setHighScore(score) {
    localStorage.setItem("highScore", score.toString());
}

function updateFinalHighScoreDisplay() {
    if (finalHighScoreDOM) finalHighScoreDOM.innerText = getHighScore();
}

export function hitTest() {
    const row = rows[position.currentRow - 1];
    if (!row) return;

    if (row.type === "car" || row.type === "truck") {
        const playerBoundingBox = new THREE.Box3();
        playerBoundingBox.setFromObject(player);

        row.vehicles.forEach(({ ref }) => {
            if (!ref) throw Error("Vehicle reference is missing");

            const vehicleBoundingBox = new THREE.Box3();
            vehicleBoundingBox.setFromObject(ref);

            if (playerBoundingBox.intersectsBox(vehicleBoundingBox)) {
                if (!resultDOM || !finalScoreDOM) return;
                resultDOM.style.visibility = "visible";
                finalScoreDOM.innerText = position.currentRow.toString();
                // High score logic
                const currentScore = position.currentRow;
                const highScore = getHighScore();
                if (currentScore > highScore) {
                    setHighScore(currentScore);
                }
                updateFinalHighScoreDisplay();
                lockMovement();
            }
        });
    }
}