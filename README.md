# My Crossy Road Game

A 3D endless runner game inspired by Crossy Road, built with [Three.js](https://threejs.org/) and [Vite](https://vitejs.dev/). Guide your character across an endless, procedurally generated landscape filled with roads, vehicles, forests, and obstacles. How far can you go before getting hit?

## Gameplay

- **Objective:** Move your player forward as far as possible, dodging cars, trucks, and trees. Each row you advance increases your score by 1.
- **Obstacles:**
  - **Roads:** Watch out for moving cars and trucks! Colliding with a vehicle ends the game.
  - **Forests:** Trees block your path—navigate around them to keep moving forward.
- **Infinite Map:** The map is procedurally generated, so every run is unique.
- **Game Over:** If you collide with a vehicle, the game ends and your score is displayed. Press the Retry button or the Spacebar to play again.

## Controls

- **Arrow Keys:** Move Up, Down, Left, or Right
- **On-Screen Buttons:** Use the ▲, ▼, ◀, ▶ buttons on mobile or with your mouse
- **Spacebar:** Restart the game after a collision

## Features

- 3D graphics powered by Three.js
- Smooth player and vehicle animations
- Procedurally generated map with roads, forests, cars, trucks, and trees
- Responsive controls for both keyboard and on-screen play
- Real-time score display
- Simple, retro-inspired UI

## Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Manav-ast/my-crossy-road-game.git
   cd my-crossy-road-game
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. Open your browser and go to the local server address (usually [http://localhost:5173](http://localhost:5173)).

## Build for Production

To build the app for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

## Project Structure

```
my-crossy-road-game/
├── index.html
├── package.json
├── public/
│   ├── collision.mp3
│   ├── move.mp3
│   └── vite.svg
├── src/
│   ├── animatePlayer.js
│   ├── animateVehicles.js
│   ├── collectUserInput.js
│   ├── components/
│   │   ├── Camera.js
│   │   ├── Car.js
│   │   ├── DirectionalLight.js
│   │   ├── Grass.js
│   │   ├── Map.js
│   │   ├── Player.js
│   │   ├── Renderer.js
│   │   ├── Road.js
│   │   ├── Tree.js
│   │   ├── Truck.js
│   │   └── Wheel.js
│   ├── constants.js
│   ├── hitTest.js
│   ├── main.js
│   ├── style.css
│   └── utilities/
│       ├── calculateFinalPosition.js
│       ├── endsUpInValidPosition.js
│       └── generateRows.js
```

## Dependencies

- [Three.js](https://threejs.org/): 3D rendering
- [Vite](https://vitejs.dev/): Development server and build tool

---

_This project is for educational and entertainment purposes, inspired by the classic Crossy Road game._
