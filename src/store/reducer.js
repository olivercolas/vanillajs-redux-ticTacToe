import { INSERTX, INSERTO, SWITCH_TURN } from "./actionTypes";

const initialState = {
  boxes: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null
  },
  turn: "player1"
};

export default (state, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }

  switch (action.type) {
    case INSERTX:
      const currState = { ...state };
      currState.boxes[action.box] = "player1";
      return currState;
    case INSERTO:
      const currState2 = { ...state };
      currState2.boxes[action.box] = "player2";
      return currState2;
    case SWITCH_TURN:
      const turn = state.turn === "player1" ? "player2" : "player1";
      return { ...state, turn };
    default:
      return state;
  }
};
