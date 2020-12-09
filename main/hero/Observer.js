import {observe} from './observe';
import {arrayMethods} from './array.js'
function defineReactive(data,key,value){
  observe(value)
    Object.defineProperty(data, key, {
        get() {
          console.log('获取数df据',value);
          return value;
        },
        set(newValue) {
          console.log('设置数据',newValue);
          if (newValue === value) return;
          value = newValue;
        }
      });

}
export class Observer{
    constructor(data){
      if(Array.isArray(data)){
        data.__proto__=arrayMethods
      }else{
        this.walk(data)
      }
      
    }
    walk(data){
        let keys = Object.keys(data);
        for(let i = 0; i < keys.length; i++) {
          let key = keys[i];
          let value = data[key];
          defineReactive(data, key, value);
        }
    }

    
}
