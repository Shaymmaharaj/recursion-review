// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var array = [];
    var helper = function(element){
    if(element.classList && element.classList.contains(className)){
      array.push(element)
    }  
  
  
    if(element.hasChildNodes()){
      for(var i = 0; i < element.childNodes.length; i++){
          helper(element.childNodes[i])
      }
    }
  }
  


    helper(document.body)
    return array
};
