export default class RowContainer {
  constructor(id, margin = "4px") {
    this.id = id;
    this.element = document.createElement("div");
    this.margin = margin;
  }

  paint() {
    this.element.setAttribute("id", this.id);
    this.element.style.display = "flex";
    this.element.style.flexFlow = "row nowrap";
    this.element.style.justifyContent = "center";
    this.element.style.marginBottom = this.margin;

    document.getElementById("app").append(this.element);
  }
}
