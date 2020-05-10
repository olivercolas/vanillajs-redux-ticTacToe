export default function(letter, size = "30px") {
  const item = document.createElement("div");
  item.innerHTML = letter.toUpperCase();
  item.style.fontSize = size + "px";

  return item;
}
