/* This module loads the contact section of the page */

let content = document.getElementById("content");

export default function contact() {
  let title = document.createElement("h1");
  title.textContent = "Contact";
  // It does not have class "title"
  
  let contents = document.createElement("div");
  contents.classList = "contact";
  let contactInfo = "<h2>Address</h2><p>404, Imaginary Street, Nonexisten City, Córdoba.</p><h2>Phone number</h2><p>351 111-1111</p><h2>E-mail</h2><p><a href=\"mailto:inexistent@nothing.com\">inexistent@nothing.com</a></p><h2>Opening Hours</h2><p>From 9.00 AM to 1.00 AM</p>";

  contents.innerHTML = contactInfo;
  content.appendChild(title);
  content.appendChild(contents);
}
