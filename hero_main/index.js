import hero from "hero";
let app = document.querySelector("#app");
let hr = new hero({
  el: app,
  fragment:{},
  data: {
    a: 1,
    b: 2,
    c: 3,
    data: {
      x: "9",
      y: "99",
      z:[1,2,3]
    },
  },
});

console.log(hr);
