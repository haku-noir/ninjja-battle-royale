import store from "./index";
import { KEY } from "./constants";
import { playerActions } from "./playerSlice";

const playerHandler = {
  keydown: (event: KeyboardEvent) => {
    const state = store.getState();
    const dispatch = store.dispatch;
    let tx = 0;
    let ty = 0;
    switch (event.key) {
      case KEY.up:
        ty -= 1;
        break;
      case KEY.down:
        ty += 1;
        break;
      case KEY.left:
        tx -= 1;
        break;
      case KEY.right:
        tx += 1;
        break;
    }
    const pos = state.player.pos;
    dispatch(
      playerActions.setPos({
        x: pos.x + tx,
        y: pos.y + ty,
      })
    );
  },
};

export default playerHandler;
