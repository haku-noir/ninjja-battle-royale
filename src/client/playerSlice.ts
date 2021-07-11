import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HEIGHT, PLAYER_IMAGE, SIZE, WIDTH } from "./constants";

export type Position = {
  x: number;
  y: number;
};

export type Scale = {
  sx: number;
  sy: number;
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

export type PlayerState = Position & Scale & Velocity & ImgDic4;

const initialState: PlayerState = {
  x: (WIDTH * SIZE) / 2,
  y: (HEIGHT * SIZE) / 2,
  sx: SIZE,
  sy: SIZE,
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
    ): PlayerState => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setScl: (state: PlayerState, action: PayloadAction<Scale>): PlayerState => {
      return {
        ...state,
        ...action.payload,
      };
    },
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
