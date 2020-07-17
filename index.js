function getFirstSelector(selector){
  var internal = document.querySelector(selector);
  return internal;
}

function nestedTarget(){
  var internal = document.querySelector('#nested .target');
  return internal;
}

function increaseRankBy(n){
  var internal = document.querySelector('ul.ranked-list');
  console.log(internal);
  internal.forEach((element) => {
    //element = parseInt(element) + n;
  })
}

function deepestChild(tree){

}
