import Tile from "./Tile";
import RowContainer from "./RowContainer";

export default class Board {
  constructor(tileSize = "100px") {
    this.tileSize = tileSize;
    this.paint = this.paint.bind(this);
    this.element = document.createElement("div");
    this.initAppContainer();

    this.refreshBoard = this.refreshBoard.bind(this);
  }

  paint() {
    this.refreshBoard();
  }

  initAppContainer() {
    this.element.setAttribute("id", "app");
    this.element.style.display = "flex";
    this.element.style.height = "100%";
    this.element.style.alignItems = "center";
    this.element.style.flexFlow = "column nowrap";
    this.element.style.justifyContent = "center";

    document.body.append(this.element);
  }

  refreshBoard() {
    this.clearBoard();
    this.buildBoard();
  }

  clearBoard() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.lastChild);
    }
  }

  buildBoard() {
    const container1 = new RowContainer("row1");
    const container2 = new RowContainer("row2");
    const container3 = new RowContainer("row3");
    container1.paint();
    container2.paint();
    container3.paint();

    for (let i = 1; i <= 9; i++) {
      const tile = new Tile(i, this.tileSize);
      if (i <= 3) {
        tile.paint(container1.element);
      } else if (i > 3 && i <= 6) {
        tile.paint(container2.element);
      } else {
        tile.paint(container3.element);
      }
    }
  }
}
