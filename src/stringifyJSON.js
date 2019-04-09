// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
    var output = []

    if(obj === null){
      return "null"
    }

  if(typeof obj === "string"){
    return '"' + obj + '"'
  }
  if(typeof obj === "number"){
    return obj.toString()
  }
  if(typeof obj === "boolean"){
    return obj.toString()
  }
  if(Array.isArray(obj)){
    for(var i = 0; i < obj.length; i++){
      output.push(stringifyJSON(obj[i]))
    }
    return  '[' + output + ']'
  }else if(typeof obj === "object"){
    if (Object.keys(obj).length === 0){
      return '{}'
    }
    for(var key in obj){
      if(obj[key] === undefined){
        return '{}'
      }
      output.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))

    }
    return '{' + output + '}'
  }



return output.toString()



    

  // for(var key in obj){
  //   if (typeof obj[key] === "object"){
  //       return stringifyJSON(obj[key])
  //   }
  //   if(typeof obj[key] === "string"){
  //       return Object.keys(obj).toString();
  //   } 
  //   if(typeof obj[key] === "number"){
  //         return obj[key].toString()
  //   }
  // }
};
