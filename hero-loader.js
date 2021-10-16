  function heroLoader(source){
      let temp=source.match(/<heroView>([\s\S]*?)<\/heroView>/g)
     let ret=temp.replace(/<heroView>/g,"")
     let newsource=ret.replace(/<\heroView>/g,"")
    return `export default function(){
       return  '${newsource}'
    }`;
}

module.exports=heroLoader;