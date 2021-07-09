import store from "./index";
import { SIZE } from "./constants";

export const drawMap = (ctx: CanvasRenderingContext2D) => {
  const map = store.getState().entity.map;

  map.field.forEach((row, h) => {
    row.forEach((column, w) => {
      ctx.drawImage(
        <HTMLImageElement>document.getElementById(map.img[column]),
        w * SIZE,
        h * SIZE,
        SIZE,
        SIZE
      );
    });
  });
};

export const drawPlayer = (ctx: CanvasRenderingContext2D) => {
  const player = store.getState().player;

  ctx.drawImage(
    <HTMLImageElement>document.getElementById(player.img_bottom),
    player.x,
    player.y
  );
};
