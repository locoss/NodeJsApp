var rect = {
	perimeter: function(x, y){ return (2 * (x+y)); },
	area: function (x, y) { return x*y; }
};

function calculator (type, x, y){
	console.log
	if(x <= 0 || y <= 0) {
		return console.log("Set up valid data.");
	}
	switch(type){
			case 'perimeter':
				return console.log("Perimeter is " + rect.perimeter(x, y));
				break;
			case 'area':
				return console.log("Area is " + rect.area(x, y));
				break;
			default:
				return console.log("You should specify types of calculation: perimeter of area");
				break;
	}
}

calculator('perimeter', 10, 5);
calculator('area', 10, 5);
calculator('test', 10, 5);
