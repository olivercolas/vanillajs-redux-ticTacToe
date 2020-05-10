import store from "../store";
import { playTurn } from "../store/actions";
import input from "./input";

export default class Tile {
  constructor(id = 1, size = 100) {
    this.id = id;
    this.size = size;
    this.paint = this.paint.bind(this);
    this.element = document.createElement("div");
    this.selected = false;

    this.onClick = this.onClick.bind(this);
  }

  paint(destination) {
    this.element.style.border = "2px solid black";
    this.element.style.borderRadius = "2px";
    this.element.style.height = `${this.size}px`;
    this.element.style.width = `${this.size}px`;
    this.element.style.marginRight = "4px";
    this.element.style.display = "flex";
    this.element.style.flexFlow = "row nowrap";
    this.element.style.alignItems = "center";
    this.element.style.justifyContent = "center";
    this.element.onclick = this.onClick;

    destination.append(this.element);
  }

  onClick() {
    const textSize = this.size * (2 / 3).toFixed(2);
    if (!this.selected) {
      store.dispatch(playTurn(this.id));
      if (store.getState().turn === "player1") {
        this.element.append(input("x", textSize));
      } else {
        this.element.append(input("o", textSize));
      }
      this.selected = true;
    }
  }
}
