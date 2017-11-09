
//d3.json("http://localhost:8080/assets/js/canada.json", function(data){



var width = 700,
height = 500;

var svg = d3.select("svg")
.attr("width", width)
.attr("height", height);

//var projection = d3.geo.mercator().center([0, 55]);

var projection = d3.geo.albers()
.scale(200)
//.translate([width / 2, height / 2]);

var map = svg.append("g").attr("id", "map")

d3.json("http://localhost:8080/assets/js/canada.json", function(data) {

var path = d3.geo.path()
	.projection(projection);

map.selectAll("path")
	.data(data.features)
	.enter().append("path")
	.attr("d", path)
});

//End map code



d3.json("http://localhost:8080/assets/js/eq.json", function(raw) {

	  var data = raw["features"].map(function(d) {
	    return {"magnitude": d["properties"]["mag"], "coordinates": d["geometry"]["coordinates"].slice(0,-1)}
	  })

	  var scale = d3.scale.linear()
	      .domain([1,10])
	      .range([0,60]);

	  var circles = svg.selectAll("circle")
	       .data(data)
	     .enter().append("circle");

	  circles
	      .attr("cx", function(d,i) {
	        return projection(d.coordinates)[0];
	      })
	      .attr("cy", function(d,i) {
	        return projection(d.coordinates)[1];
	      })
	      .attr("r", function(d,i) {
	        return scale(d.magnitude);
	      })
	      .style("fill", "steelblue")
	      .style("fill-opacity", 0.5);

	});

