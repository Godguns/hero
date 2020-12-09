import { initState } from "./observe";
export default class {
  constructor(e) {
    this._init(e);
   
    if(this.el!==null){
        this.$mount(e);
    }
  }
  _init(options) {
    let vm = this;
    vm.el = options.el;
    vm.fragment=options.fragment
    vm.$options = options.data;
    initState(vm);
  }
  $mount(){
        let vm = this;
        let el = vm.$options.el; // 获取元素


  }


}
