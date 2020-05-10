import { INSERTX, INSERTO, SWITCH_TURN } from "./actionTypes";

export const insertX = box => ({
  type: INSERTX,
  box
});

export const insertO = box => ({
  type: INSERTO,
  box
});

export const switchTurn = () => ({
  type: SWITCH_TURN
});

export const playTurn = id => {
  return (dispatch, getState) => {
    const currentPlayer = getState().turn;
    if (currentPlayer === "player1") {
      dispatch(insertX(id));
    } else {
      dispatch(insertO(id));
    }
    dispatch(switchTurn());
  };
};
