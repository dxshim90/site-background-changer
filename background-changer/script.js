const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("body");

console.log(css);
console.log(color1);
console.log(color2);
console.log(body);

color1.addEventListener("input", () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${
    color2.value
  })`;
  css.textContent = body.style.background + ";";
});

color2.addEventListener("input", () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${
    color2.value
  })`;
  css.textContent = body.style.background + ";";
});
