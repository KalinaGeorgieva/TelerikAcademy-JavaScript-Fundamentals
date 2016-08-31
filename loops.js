function numbers(args) {
    var n = +args[0];
    var result = "";

    for (var i = 1; i <= n; i += 1) {
        result += i + " ";
    }
    console.log(result);
}
//numbers(['5']);

function mmsa(args) {
    var min = +args[0];
    var max = +args[0];
    var sum = 0;
    var avg = 0;
    var elementCount = 0;

    for (var i = 0; i < args.length; i += 1) {
        var element = +args[i];
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
        sum += element;
        elementCount += 1;
    }
    avg = sum / elementCount;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}
//mmsa(['2', '5', '1']);


function matrix(args) {

    var number = +args[0];
    var result = "";

    for (var i = 1; i <= number; i += 1) {
        for (var k = i; k <= i + number - 1; k += 1) {
            result += k + " ";
        }
        result += "\n";
    }

    console.log(result);
}
//matrix(['2']);


function hexToDecimal(args) {
    var symbols = '0123456789ABCDEF';
    var hex = String(args[0]);
    var result = 0;
    var digit = 0;

    for (var i = 0; i < hex.length; i += 1) {

        result += symbols.indexOf(hex[i]) * Math.pow(16, hex.length - 1 - i);
    }

    console.log(result);
}
//hexToDecimal(['FE']);