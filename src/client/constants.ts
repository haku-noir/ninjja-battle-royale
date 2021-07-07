import { ImgDic4 } from "./playerSlice";

export const WIDTH = 30;
export const HEIGHT = 20;
export const SIZE = 32;

export const IMAGE_DIR = "images/";
export const PLAYER_IMAGE: ImgDic4 = {
  top: <HTMLImageElement>document.getElementById("player_top"),
  bottom: <HTMLImageElement>document.getElementById("player_bottom"),
  right: <HTMLImageElement>document.getElementById("player_right"),
  left: <HTMLImageElement>document.getElementById("player_left"),
};
