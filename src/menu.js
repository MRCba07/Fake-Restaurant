/* This module creates the content for the menu section */

let content = document.getElementById("content");

export default function menu() {
  const title = document.createElement("h1");
  title.textContent = "Menu";
  title.classList = "title";

  const menu = document.createElement("section");
  menu.classList = "menu";

  const menuContent = "<article><h2>Full Breakfast</h2><p>Bacon, grilled tomatoes, fried bread, baked beans, eggs.</p></article><article><h2>Fish and Chips</h2><p>Fired fish in batter, with chips.</p></article><article><h2>Cottage Pie</h2><p>Minced mean topped with mashed potato and baked.</p></article><article><h2>Balti (Curry)</h2><p>Lamb, garlic, onion</p></article><article><h2>Stew</h2><p>Lamb and onion, topped with sliced potatoes</p></article>";


  menu.innerHTML = menuContent;

  content.appendChild(title);
  content.appendChild(menu);
}
