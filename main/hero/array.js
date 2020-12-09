import { observe } from "./observe";

// 拷贝新的对象，用来查找老的方法, 不修改原型上的方法
export let  arrayMethods=Object.create(Array.prototype);
let arr_methods=['push','pop','shift','unshift','slice','splice'];
//循环遍历arr_methods 来劫持原本的数组方法方法  
let observerArray=function(args){
    for(let i=0; i<args.length;i++){
        observe(args[i])
    }
}
arr_methods.forEach(item=>{
    //劫持方法
    arrayMethods[item]=function(...args){
       let result= Array.prototype[item].apply(this,...args);
        console.log('===数组劫持===');
        let runtime_arguments;
        switch(item){
            case 'push':
                runtime_arguments=args;
                break;
            case 'unshift':
                runtime_arguments=args;
                break;
            case 'splice':
                runtime_arguments=args.slice(2)//当执行splice方法的时候获取到用户给splice方法的参数（start开始位置,count结束的数量,添加的数据）
                break;
            default:
                break;
                
        }
        if(inserted) observerArray(inserted);//对用户添加或者删除的数据添加响应式
        return result;

    }
})

