import {initState} from './obverse'
export default class {
    constructor(e){
        
       this._init(e.data)
       this.el=e.el
    }
    _init(options){
        let vm=this;
        vm.$options=options
        initState(vm)
    }
   
}
