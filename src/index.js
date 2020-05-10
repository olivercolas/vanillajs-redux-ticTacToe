import "./styles.css";
import Board from "./Board";
import store from "./store";

const board = new Board(100);
board.paint();

function log() {
  console.log(store.getState());
}

log();
store.subscribe(log);
