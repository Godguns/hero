import hero from "hero";
import APP from '../APP/APP.hero'
let hr = new hero({
  el: APP(),
  fragment:{},
  state: {
    data: {
      x: "9",
      y: "99",
      z:[1,2,3]
    },
  },
});

