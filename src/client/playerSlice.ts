import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PLAYER_IMAGE } from "./constants";

export type Position = {
  x: number;
  y: number;
};

export type Velocity = {
  vx: number;
  vy: number;
};

export type ImgDic4 = {
  img_top: string;
  img_bottom: string;
  img_left: string;
  img_right: string;
};

export type PlayerState = Position & Velocity & ImgDic4;

const initialState: PlayerState = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ...PLAYER_IMAGE,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPos: (
      state: PlayerState,
      action: PayloadAction<Position>
    ): PlayerState => ({
      ...state,
      ...action.payload,
    }),
    setVel: (
      state: PlayerState,
      action: PayloadAction<Velocity>
    ): PlayerState => ({
      ...state,
      ...action.payload,
    }),
    setImg: (
      state: PlayerState,
      action: PayloadAction<ImgDic4>
    ): PlayerState => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice;
