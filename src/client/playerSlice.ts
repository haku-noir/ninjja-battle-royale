import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Position = {
  x: number;
  y: number;
};

export type PlayerState = {
  pos: Position;
};

const initialState: PlayerState = {
  pos: { x: 0, y: 0 },
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPos: (state, action: PayloadAction<Position>) => ({
      ...state,
      pos: action.payload,
    }),
  },
});

export const { setPos } = playerSlice.actions;

export default playerSlice;
