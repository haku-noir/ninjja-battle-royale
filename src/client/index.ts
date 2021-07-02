import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./playerSlice";

const store = configureStore({
  reducer: playerSlice.reducer,
});

const canvas: any = document.getElementById("scene");
const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

ctx.fillRect(0, 0, 100, 100);
