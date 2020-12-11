import { Observer } from "./Observer.js";
export function initState(vm) {
  let opts = vm.$options;
  if (opts.data) {
    //如果用户输入了data属性
    initData(vm);
  }
}

function initData(vm) {
  let data = vm.$options.data;
  //观测数据响应式
  observe(vm.$options);
}

export function observe(data) {
  if (typeof data !== "object" || data == null) {
    return;
  }
  return new Observer(data);
}
