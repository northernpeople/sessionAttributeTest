//alert("hi2");

// arrray of objects
var journal = [];
function addEntry(events, didITurnIntoASquirrel) {
  journal.push({ events: events, squirrel: didITurnIntoASquirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.log(journal);

// maps
var map = {};
function store(event, phi) { map[event] = phi; }
store("pizza", 0.069);
store("colzone", 0.096);

console.log("pizza" in map);
console.log(map["pizza"]);

for(var e in map){
	console.log(e + " -> " + map[e]);
}


