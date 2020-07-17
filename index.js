function getFirstSelector(selector){
  var internal = document.querySelector(selector);
  return internal;
}

function nestedTarget(){
  var internal = document.querySelector('#nested .target');
  return internal;
}

function increaseRankBy(n){
  var internal = document.querySelectorAll('.ranked-list');
  debugger
  internal.forEach(element => {
    element = parseInt(element) + n;
  })
}

function deepestChild(tree){

}
