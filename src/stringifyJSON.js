// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
    var output = []

  if(Array.isArray(obj)){
      for(var i = 0; i < obj.length; i++){
        if(typeof obj[i] === 'object'){
          output.push(stringifyJSON(obj[i]))
        } 
      if(typeof obj[i] === 'string'){
          output.push( obj[i])
      }
      if(typeof obj[i] === 'number'){
        output.push( obj[i])
      }
    }
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
