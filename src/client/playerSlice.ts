import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Vec2 = {
  x: number;
  y: number;
};

export type PlayerState = {
  pos: Vec2;
  vel: Vec2;
};

const initialState: PlayerState = {
  pos: { x: 0, y: 0 },
  vel: { x: 0, y: 0 },
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPos: (state, action: PayloadAction<Vec2>) => ({
      ...state,
      pos: action.payload,
    }),
    setVel: (state, action: PayloadAction<Vec2>) => ({
      ...state,
      vel: action.payload,
    }),
  },
});

export const { setPos } = playerSlice.actions;

export default playerSlice;
