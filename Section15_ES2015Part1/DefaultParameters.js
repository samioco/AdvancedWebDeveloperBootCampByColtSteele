function add(a,b){
  return a+b;
}
add(); // NaN because a,b both undefined


function add(a,b){
  if (a=== undefined){
    a=2;
  }
  if (b=== undefined){
    b=2;
  }
  return a+b;
}

// default parameter shorter syntax:
function add(a=2, b=2){
  return a+b;
}
add(); // 4
add(1); // 3
