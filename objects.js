function triangle(args) {
    var arr = args;
    var line1Point1 = makePoint(+arr[0], +arr[1]);
    var line1Point2 = makePoint(+arr[2], +arr[3]);
    var line2Point1 = makePoint(+arr[4], +arr[5]);
    var line2Point2 = makePoint(+arr[6], +arr[7]);
    var line3Point1 = makePoint(+arr[8], +arr[9]);
    var line3Point2 = makePoint(+arr[10], +arr[11]);

    var line1 = makeLine(line1Point1, line1Point2);
    var line2 = makeLine(line2Point1, line2Point2);
    var line3 = makeLine(line3Point1, line3Point2);


    var one = line1.distX();
    console.log(one.toFixed(2));
    var two = line2.distX();
    console.log(two.toFixed(2));
    var three = line3.distX();
    console.log(three.toFixed(2));

    if (one + two > three && one + three > two && two + three > one)
        console.log('Triangle can be built');
    else
        console.log('Triangle can not be built');

    function makePoint(a, b) {
        return {
            x: a,
            y: b
        };
    }

    function makeLine(c, d) {
        return {
            firstPoint: c,
            secondPoint: d,
            distX: function() {
                return Math.sqrt(Math.pow((Math.abs(this.firstPoint.x - this.secondPoint.x)), 2) + Math.pow((Math.abs(this.firstPoint.y - this.secondPoint.y)), 2));
            }
        };
    }
}
triangle(['7', '7', '2', '2', '5', '6', '2', '2', '95', '-14.', '5', '0', '-0.123']);

//not working 70/100
function rem1(args) {
    var toRemove = args[0],
        len = 0;
    Array.prototype.remove = function(n) {
        var index = this.indexOf(n);
        while (index >= 0) {
            this.splice(index, 1);
            index = args.indexOf(toRemove, index + 1);
        }
    };
    args.remove(toRemove);
    len = args.length;
    for (var i = 0; i < len; i += 1) {
        console.log(args[i]);
    }
}

function rem(args) {
    var toRemove = args[0],
        len = 0,
        res = [];
    Array.prototype.remove = function(n) {
        var newArr = [];
        for (var i = 0; i < this.length; i += 1) {
            if (this[i] !== n) {
                newArr.push(this[i]);
            }
        }
        return newArr;
    };
    res = args.remove(toRemove);
    console.log(res.join('\n'));
}
//rem(['1', '2', '3', '2', '1', '2', '3', '2']);

function youngest(args) {
    var persons = [],
        young = {},
        i;

    for (i = 0; i < args.length - 1; i += 3) {
        persons[i / 3] = makePerson(args[i], args[i + 1], +args[i + 2]);
    }
    young = persons[0];
    for (i = 0; i < persons.length; i += 1) {
        if (young.age > persons[i].age) {
            young = persons[i];
        }
    }

    console.log(young.tostring());

    function makePerson(name, lastname, age) {
        return {
            name: name,
            lastname: lastname,
            age: age,
            tostring: function() {
                return name + ' ' + lastname;
            }
        };
    }
}