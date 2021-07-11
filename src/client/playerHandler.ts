import store from "./index";
import { KEY } from "./constants";
import { playerActions } from "./playerSlice";
import { canMove } from "./mapSystem";

const playerHandler = {
  update: () => {
    const player = store.getState().player;
    const dispatch = store.dispatch;

    if (canMove(player)) {
      dispatch(
        playerActions.setPos({
          x: player.x + player.vx,
          y: player.y + player.vy,
        })
      );
    }
  },
  keydown: (event: KeyboardEvent) => {
    const player = store.getState().player;
    const dispatch = store.dispatch;

    switch (event.key) {
      case KEY.up:
        dispatch(
          playerActions.setVel({
            vx: player.vx,
            vy: -1,
          })
        );
        break;
      case KEY.down:
        dispatch(
          playerActions.setVel({
            vx: player.vx,
            vy: 1,
          })
        );
        break;
      case KEY.left:
        dispatch(
          playerActions.setVel({
            vx: -1,
            vy: player.vy,
          })
        );
        break;
      case KEY.right:
        dispatch(
          playerActions.setVel({
            vx: 1,
            vy: player.vy,
          })
        );
        break;
    }
  },
  keyup: (event: KeyboardEvent) => {
    const player = store.getState().player;
    const dispatch = store.dispatch;

    switch (event.key) {
      case KEY.up:
      case KEY.down:
        dispatch(
          playerActions.setVel({
            vx: player.vx,
            vy: 0,
          })
        );
        break;
      case KEY.left:
      case KEY.right:
        dispatch(
          playerActions.setVel({
            vx: 0,
            vy: player.vy,
          })
        );
        break;
    }
  },
};

export default playerHandler;
