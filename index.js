function getFirstSelector(selector){
  var internal = document.querySelector(selector);
  return internal;
}

function nestedTarget(){
  var internal = document.querySelector("#nested .target");
  return internal;
}

function deepestChild(){
  var internal;
  var tree = document.querySelector("#grand-node");

  return internal;
}

function increaseRankBy(n){
  var internal = document.querySelectorAll(".ranked-list");
  console.log(internal); // this isn't an array apparently
  internal.forEach((element) => {
    //element = parseInt(element) + n;
  })
}
