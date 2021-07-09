import { configureStore } from "@reduxjs/toolkit";
import { HEIGHT, SIZE, WIDTH } from "./constants";
import entitySlice from "./EntitySlice";
import playerSlice from "./playerSlice";
import playerHandler from "./playerHandler";

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

  const player = store.getState().player;

  ctx.fillRect(0, 0, WIDTH * SIZE, HEIGHT * SIZE);

  ctx.drawImage(
    <HTMLImageElement>document.getElementById(player.img_bottom),
    player.x,
    player.y
  );
};

const update = () => {
  playerHandler.update();
  draw();
};

document.body.addEventListener("keydown", playerHandler.keydown);
document.body.addEventListener("keyup", playerHandler.keyup);

setInterval(update, 1000 / 60);
draw();

export default store;
