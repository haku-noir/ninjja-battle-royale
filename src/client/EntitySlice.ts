import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FIELD, HEIGHT, MAP_IMAGE, SIZE, WIDTH } from "./constants";
import { PlayerState } from "./playerSlice";

export type MapState = {
  size: number;
  width: number;
  height: number;
  field: Array<Array<number>>;
  img: Array<string>;
};

export type EntityState = {
  players: Array<PlayerState>;
  map: MapState;
};

const initialState: EntityState = {
  players: [],
  map: {
    size: SIZE,
    width: WIDTH,
    height: HEIGHT,
    field: FIELD,
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
