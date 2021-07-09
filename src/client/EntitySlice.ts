import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerState } from "./playerSlice";

export type EntityState = {
  players: Array<PlayerState>;
};

const initialState: EntityState = {
  players: [],
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
