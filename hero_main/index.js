import hero from "hero";
import APP from '../APP/APP.hero'
let hr = new hero({
  el: APP,
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
//hr.$options.data.a=33

//console.log(hr);
