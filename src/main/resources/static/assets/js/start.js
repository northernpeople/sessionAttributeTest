//alert("hie");

// arrays:
var ray = [];
ray.push("dog")
console.log(ray);
console.log(ray[0]);

// functions
function times (first){ // first is closed over
	return function(second){ return first * second; }
}

var fiver = times(5);

console.log(fiver(4));
console.log(fiver(6));

// objects:

var nobject = { cool: true, props:["first", "second"] } ;

console.log(nobject);
console.log(nobject.cool);
console.log("cool" in nobject)
delete nobject.cool; // deletes property
console.log("cool" in nobject)
console.log(nobject.cool);
console.log(nobject.props[1]);
console.log(nobject.dog);






