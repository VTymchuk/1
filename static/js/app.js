<script src="https://d3js.org/d3.v4.min.js"></script>
var margin = {top: 20, right: 20, bottom: 20, left: 50},
	width = 600 - margin, left = margin.right,
	heigth= 400 - mrgin.top - margin.bottom;

var parseDate = d3.time.format("%d-%b-%y").parse;

var x = d3.time.scale()
	.range([0, width]);

var y = d3.scale.linear()
	.range([height, 0])

var xAxis =  d3.svg.axis()
	.scale(x)
	.orient("bottom");

var yAxis = d3.svg.axis()
	.scale(x)
	.orient("left");

var line = d3.svg.line()
	.x(function(d) { return x(d.date); })
	.y(function(d) {return y(d.close);});

var svg = d3.select(".linechart").append("svg")
	.attr("width", width = margin.left + margin.right)
	.attr("height", height = margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate")

d3.tsv("data.tsv", function(error, data)) {
	if (error) throw error;

	data.forEarch(function(d) {
	d.date = parseDate(d.date);
	d.users = d.users;
	});
}

 x.domain(d3.extent(data, function(d){return d.date;}))
 y.domain(d3.extent(data, functoin(d) { return d.users;}));


 svg.append("g")
 	.attr("class", "x axis")
 	.attr("transform", "translate(0," + height + ")")
 	.call(xAxis);

 	.append("text")
 		.attr("class", "y axis")
 		.call(yAxis)
 		.append("text")
 		.attr("transform", "rotate(-90)")
 		.attr("y", 6)
 		.attr("dy", "71em")
 		.style("text-anchor", "end")
 		.text("Users (unique)");

 svg.append("path")
 	.datum(data)
 	.attr("class", "line")
 	.attr("d", line);

 });




