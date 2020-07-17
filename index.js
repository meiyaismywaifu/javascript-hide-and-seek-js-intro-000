function getFirstSelector(selector){
  var internal = document.querySelector(selector);
  return internal;
}

function nestedTarget(){
  var internal = document.querySelector('#nested .target');
  return internal;
}


function deepestChild(tree){

}


function increaseRankBy(n){
  var internal = document.querySelectorAll('.ranked-list');
  console.log(internal);
  internal.forEach((element) => {
    //element = parseInt(element) + n;
  })
}