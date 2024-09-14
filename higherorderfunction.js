// first class functioni 

function namee(nm){
    return nm;
}

var x = namee;
console.log(x("Gourab"));


// call back function

function mainfun(a,b, operation){
    operation(a,b);
}

function add(a,b) {
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
    
}
mainfun(5,3, add);
mainfun(5,3, sub);