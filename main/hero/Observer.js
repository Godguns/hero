import {obverse} from './obverse'
function defineReactive(data,key,value){
    obverse(value)
    Object.defineProperty(data, key, {
        get() {
          console.log('获取数据');
          return value;
        },
        set(newValue) {
          console.log('设置数据');
          if (newValue === value) return;
          value = newValue;
        }
      });

}
export class Observer{
    constructor(data){
        this.walk(data)
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
