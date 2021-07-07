import store from "./index";
import { KEY } from "./constants";
import { playerActions } from "./playerSlice";

const playerHandler = {
  update: () => {
    const player = store.getState().player;
    const dispatch = store.dispatch;

    dispatch(
      playerActions.setPos({
        x: player.pos.x + player.vel.x,
        y: player.pos.y + player.vel.y,
      })
    );
    console.log(player);
  },
  keydown: (event: KeyboardEvent) => {
    const player = store.getState().player;
    const vel = player.vel;
    const dispatch = store.dispatch;

    switch (event.key) {
      case KEY.up:
        dispatch(
          playerActions.setVel({
            ...vel,
            y: -1,
          })
        );
        break;
      case KEY.down:
        dispatch(
          playerActions.setVel({
            ...vel,
            y: 1,
          })
        );
        break;
      case KEY.left:
        dispatch(
          playerActions.setVel({
            ...vel,
            x: -1,
          })
        );
        break;
      case KEY.right:
        dispatch(
          playerActions.setVel({
            ...vel,
            x: 1,
          })
        );
        break;
    }
  },
  keyup: (event: KeyboardEvent) => {
    const player = store.getState().player;
    const vel = player.vel;
    const dispatch = store.dispatch;

    switch (event.key) {
      case KEY.up:
      case KEY.down:
        dispatch(
          playerActions.setVel({
            ...vel,
            y: 0,
          })
        );
        break;
      case KEY.left:
      case KEY.right:
        dispatch(
          playerActions.setVel({
            ...vel,
            x: 0,
          })
        );
        break;
    }
  },
};

export default playerHandler;
