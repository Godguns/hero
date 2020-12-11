module.exports = function(source){
      let temp=source.replace(/\s+/g,"")
     let ret=temp.replace(/<hero-view>/g,"")
     let newsource=ret.replace(/<\/hero-view>/g,"")
    console.log( "-----------",newsource)
    return newsource;
}