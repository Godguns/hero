import {Observer} from './Observer.js'
export function initState(vm){
    let opts=vm.$options;
    if(opts.data){//如果用户输入了data属性
        initData(vm)
    }
}


function initData(vm){
    let data=vm.$options.data;
    //vm._data=typeof data==='function'?data.call(vm):data ||{};
    for(let key in data){
       // proxy(vm,'_data',key)
    }
    //观测数据响应式
    obverse(vm.$options.data)
   
}
function proxy(vm,source,key){
    Object.defineProperty(vm,key,{
        get(){
            return vm[source][key];
        },
        set(newValue){
            vm[source][key]=newValue;
        }
    })
}
export function obverse(data){
    if(typeof data !=='object' || data==null){
        return ;
    }
    return new Observer(data)
}
