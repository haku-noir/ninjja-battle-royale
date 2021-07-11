import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TILES, HEIGHT, MAP_IMAGE, SIZE, WIDTH } from "./constants";
import { PlayerState, Scale } from "./playerSlice";

export type MapState = {
  tile: Scale;
  width: number;
  height: number;
  tiles: Array<Array<number>>;
  img: Array<string>;
};

export type EntityState = {
  players: Array<PlayerState>;
  map: MapState;
};

const initialState: EntityState = {
  players: [],
  map: {
    tile: {
      sx: SIZE,
      sy: SIZE,
    },
    width: WIDTH,
    height: HEIGHT,
    tiles: TILES,
    img: MAP_IMAGE,
  },
};

const entitySlice = createSlice({
  name: "entity",
  initialState,
  reducers: {
    setPos: (
      state: EntityState,
      action: PayloadAction<Array<PlayerState>>
    ): EntityState => ({
      ...state,
      players: action.payload,
    }),
  },
});

export const entityActions = entitySlice.actions;

export default entitySlice;
