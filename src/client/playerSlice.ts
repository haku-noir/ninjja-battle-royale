import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PLAYER_IMAGE } from "./constants";

export type Vec2 = {
  x: number;
  y: number;
};

export type ImgDic4 = {
  top: string;
  bottom: string;
  left: string;
  right: string;
};

export type PlayerState = {
  pos: Vec2;
  vel: Vec2;
  img: ImgDic4;
};

const initialState: PlayerState = {
  pos: { x: 0, y: 0 },
  vel: { x: 0, y: 0 },
  img: PLAYER_IMAGE,
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
    setImg: (state, action: PayloadAction<ImgDic4>) => ({
      ...state,
      img: action.payload,
    }),
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice;
