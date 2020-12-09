import hero from "hero";
let app = document.querySelector("#app");
let hr = new hero({
  el: app,
  data: {
    a: 1,
    b: 2,
    c: 3,
    data: {
      x: "9",
      y: "99",
    },
  },
});
hr.$options.data.x=2;
console.log(hr.$options);
