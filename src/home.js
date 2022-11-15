// This module is in charge of constructing the Home section of the website
import Img from "./assets/img.png";

const content = document.getElementById("content");

export default function home() {
  const title = document.createElement("h1");
  title.innerHTML = "The Hungry Knight";
  title.classList = "title";

  let myImg = new Image();
  myImg.src = Img;
  myImg.alt = "A collection of different dishes we serve.";

  const pageContent = "<h2>About</h2><p>We are a fictional restaurant in Argentina. The dishes are served by <em>real</em> knights in armor.</p><p>Sir George of the the House of [Something] is the owner, and the dishes we make follow Sir George's Grandmother's recipes.</p><h2>Location</h2><p>You can find us at 404, Imaginary Street, Nonexistent City in Córdoba.</p><h2>Opening Hours</h2><p>We are open from 9.00 AM to 1.00 AM.</p>";

  content.appendChild(title);
  content.appendChild(myImg);
  content.innerHTML = content.innerHTML + pageContent;
}
