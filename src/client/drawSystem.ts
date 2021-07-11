import store from "./index";

export const drawMap = (ctx: CanvasRenderingContext2D) => {
  const map = store.getState().entity.map;

  map.tiles.forEach((row, h) => {
    row.forEach((column, w) => {
      ctx.drawImage(
        <HTMLImageElement>document.getElementById(map.img[column]),
        w * map.tile.sx,
        h * map.tile.sy,
        map.tile.sx,
        map.tile.sy
      );
    });
  });
};

export const drawPlayer = (ctx: CanvasRenderingContext2D) => {
  const player = store.getState().player;

  ctx.drawImage(
    <HTMLImageElement>document.getElementById(player.img_bottom),
    player.x,
    player.y,
    player.sx,
    player.sy
  );
};
