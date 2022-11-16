import "./style.css"; // It will be appended to the <head> of the html file
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

let content = document.getElementById("content");
console.log("All right");
home();

/* Remove everything from the #content div */
function clearContent() {
  content.innerHTML = "";
}

/* Controls the tab-switching logic */
const tabs = document.querySelectorAll("#home, #menu, #contact");
console.log(tabs);

tabs.forEach((elem) => {
  if (elem.id == "home") {
    elem.addEventListener("click", () => {clearContent(); home();});
  } else if (elem.id == "menu") {
    elem.addEventListener("click", () => {clearContent(); menu();});
  } else if (elem.id == "contact") {
    elem.addEventListener("click", () => {clearContent(); contact(); });
  }
});
