var argv = require('yargs')
    .usage('Usage: node $0 --x=[num] --y=[num]')
    .demand(['x','y'])
    .argv;



var rect = require('./rect-module');

function solve(x, y) {
    console.log("Solving for rectangle with l = "
            + x + " and b = " + y);

    rect(x, y, function (err, rectangle) {
        if (err) {
            console.log(err);
        } else {
            console.log("The area of a rectangle of dimensions length = "
                    + x + " and breadth = " + y + " is " + rectangle.area());
            console.log("The perimeter of a rectangle of dimensions length = "
                    + x + " and breadth = " + y + " is " + rectangle.perimeter());
        }
    });
}


solve(argv.x, argv.y);
