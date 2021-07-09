import { configureStore } from "@reduxjs/toolkit";
import { HEIGHT, SIZE, WIDTH } from "./constants";
import entitySlice from "./EntitySlice";
import playerSlice from "./playerSlice";
import playerHandler from "./playerHandler";
import { drawMap, drawPlayer } from "./drawSystem";

const store = configureStore({
  reducer: {
    entity: entitySlice.reducer,
    player: playerSlice.reducer,
  },
});

const draw = () => {
  const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
    document.getElementById("scene")
  );
  const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

  ctx.fillRect(0, 0, WIDTH * SIZE, HEIGHT * SIZE);

  drawMap(ctx);
  drawPlayer(ctx);
};

const update = () => {
  playerHandler.update();
  draw();
};

document.body.addEventListener("keydown", playerHandler.keydown);
document.body.addEventListener("keyup", playerHandler.keyup);

setInterval(update, 1000 / 60);

export default store;
