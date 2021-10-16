import { initState } from "./observe";
export default class {
  constructor(e) {
    console.log(e)
    this._init(e);
    if (this.el !== null) {
      this._render(this.$el, this.$options.data);
    }
  }
  _init(options) {
    let vm = this;
    vm.$el = options.el;
    vm.$fragment = options.fragment;
    vm.$options = options.state;
    initState(vm);
  }
  /**
   * _render渲染函数：
   * 遍历dom节点，替换data数据
   */
  _render(view, data) {
    for (const key in data) {
      let reg = new RegExp(`{{${key}}}`, "g");
      if (data.hasOwnProperty(key)) {
        view = view.replace(reg, function () {
          return data[key];
        });
      }
    }
    let app = document.querySelector("#app");
    app.innerHTML = view;
  }
}
