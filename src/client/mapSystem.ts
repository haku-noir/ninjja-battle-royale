import store from "./index";
import { OBSTACLE_TILES } from "./constants";
import { Position, Scale, Velocity } from "./playerSlice";

export const getTile = (pos: Position): number => {
  const map = store.getState().entity.map;

  console.log(pos.y, pos.y / map.tile.sy);
  return map.tiles[Math.floor(pos.y / map.tile.sy)][
    Math.floor(pos.x / map.tile.sx)
  ];
};

export const sqVerts = (sq: Position & Scale): Array<Position> => {
  const x1 = sq.x + sq.sx;
  const y1 = sq.y + sq.sy;
  const x2 = x1 + sq.sx;
  const y2 = y1 + sq.sy;

  const verts = [
    { x: x1, y: y1 },
    { x: x1, y: y2 },
    { x: x2, y: y2 },
    { x: x2, y: y1 },
  ];

  return verts;
};

export const isInMap = (pos: Position): boolean => {
  const map = store.getState().entity.map;
  if (
    pos.x < 0 ||
    pos.y < 0 ||
    pos.x > map.tile.sx * map.width ||
    pos.y > map.tile.sy * map.height
  ) {
    return false;
  }
  return true;
};

export const canMove = (mover: Position & Scale & Velocity): boolean => {
  const next_mover = {
    ...mover,
    x: mover.x + mover.vx,
    y: mover.y + mover.vy,
  };
  const verts = sqVerts(next_mover);
  const vertTiles = verts.map((vert) => getTile(vert));

  if (!isInMap(next_mover)) return false;

  let canBeMoved = true;
  vertTiles.forEach((tile) => {
    if (!canBeMoved) return;
    OBSTACLE_TILES.forEach((obstacle_tile) => {
      if (tile == obstacle_tile) {
        canBeMoved = false;
        return;
      }
    });
  });

  return canBeMoved;
};
