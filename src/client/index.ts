import { configureStore } from "@reduxjs/toolkit";
import { HEIGHT, KEY, SIZE, WIDTH } from "./constants";
import playerSlice from "./playerSlice";
import playerHandler from "./playerHander";

const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
  },
});

document.body.addEventListener("keydown", playerHandler.keydown);

const draw = () => {
  const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
    document.getElementById("scene")
  );
  const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

  const player = store.getState().player;

  ctx.fillRect(0, 0, WIDTH * SIZE, HEIGHT * SIZE);

  ctx.drawImage(
    <HTMLImageElement>document.getElementById(player.img.bottom),
    player.pos.x,
    player.pos.y
  );
};

store.subscribe(draw);
draw();

export default store;
