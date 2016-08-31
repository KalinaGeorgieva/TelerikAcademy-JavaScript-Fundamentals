function oddOrEven(args) {
    var a = +args[0];

    return (a % 2 === 0 ? console.log("even" + " " + a) : console.log("odd" + " " + a));
}

//oddOrEven(['4']);

function devide(args) {
    var a = +args[0];

    return ((a % 5 === 0 && a % 7 === 0) ? console.log("true" + " " + a) : console.log("false" + " " + a))
}

//devide(['35']);

function rectangles(args) {
    var width = +args[0];
    var height = +args[1];
    var perimeter = 2 * (width + height);
    var area = width * height;

    console.log(parseFloat(area).toFixed(2) + " " + parseFloat(perimeter).toFixed(2));

}

//rectangles(['4', '3']);

function thirdDigit(args) {
    var a = +args[0] + "";
    var digit = a[a.length - 3];

    if (digit === "7") {
        console.log("true");
    } else if (a.length < 3) {
        console.log("false 0");
    } else {
        console.log("false " + digit);
    }
}

//thirdDigit(['747']);

function bit(number) {
    var a = +number[0];
    var b = (a >>> 3).toString(2) + "";

    console.log(b[b.length - 1]);
}

//bit(['8']);

function pointInCircle(args) {
    var x = +args[0];
    var y = +args[1];

    var distance = Math.sqrt((x - 0) * (x - 0) + (y - 0) * (y - 0)).toFixed(2);
    if (distance <= 2) {
        console.log("yes " + distance);
    } else {
        console.log("no " + distance);
    }
}

//pointInCircle(['-2', '0']);

function isPrime(args) {
    var n = +args[0];
    var prime = true;

    if (n <= 1) {
        prime = false;
    }
    for (var i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) {
            prime = false;
        }
    }
    console.log(prime);
}

//isPrime(['3']);

function trapezoids(args) {
    var a = +args[0];
    var b = +args[1];
    var h = +args[2];
    var area = ((a + b) / 2) * h;

    console.log(area.toFixed(7));
}

//trapezoids(['5', '7', '12']);

function point(args) {

    var x = +args[0];
    var y = +args[1];
    var result = "";
    var distance = Math.sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1));

    if (distance <= 1.5) {
        result = "inside circle";
    } else {
        result = "outside circle";
    }

    if ((x >= -1 && x <= 5) && (y <= 1 && y >= -1)) {
        result += " inside rectangle";
    } else {
        result += " outside rectangle";
    }

    console.log(result);
}

point(['2.5', '2']);