AOS.init();
let bars = document.querySelectorAll(".barbar div");
bars.forEach((bar) => {
  bar.style = `width:${bar.getAttribute("data-bar")}%`;
});
