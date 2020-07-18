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
  var trigger = 0;
  var tree = document.querySelector("#grand-node");
  var branch = tree;

  while(trigger === 0){
    if (branch.children[0] === undefined){
      trigger = 1;
    }
    else{
      branch = branch.children[0];
      internal = branch;
    }
  }

  return internal;
}

function increaseRankBy(n){
  var internal = document.querySelectorAll("ul.ranked-list li");
  // querySelectorAll returns a "NodeList", not an array.
  // "forEach" is defined only for arrays.
  
}
