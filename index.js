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
  internal.forEach(NoArgs => {
    console.log('foreach testing');
  })
}

function deepestChild(tree){

}
