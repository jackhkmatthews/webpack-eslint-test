import { foo } from "./foo";
import "./style.css";
import { fetchTest } from "./fetchTest";

/**
 * Multiple lines of JSDoc text are written here,
 * wrapped normally.
 * @param {number} arg A number to do something to.
 * @return {Element} arg A number to do something to.
 */
function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "Hello webpack";
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = foo;
  element.appendChild(btn);

  return element;
}

fetchTest();

document.body.appendChild(component());
