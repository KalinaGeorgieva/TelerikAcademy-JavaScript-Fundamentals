function exchangeIfGreater(args) {
    var a = +args[0];
    var b = +args[1];

    if (a > b) {
        console.log(b + ' ' + a);
    } else {
        console.log(a + ' ' + b);
    }
}
//exchangeIfGreater(['5', '2']);

function sign(args) {
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];

    if (a === 0 || b === 0 || c === 0) {
        console.log('0');
    } else if ((a > 0 && b > 0 && c > 0) || (a > 0 && b < 0 && c < 0) || (a < 0 && b < 0 && c > 0) ||
        (a < 0 && b > 0 && c < 0)) {
        console.log('+');
    } else {
        console.log('-');
    }
}
//sign(['5', '2', '2']);


function biggestOfThree(args) {
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];

    if (a >= b) {
        if (a >= c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else {
        if (b >= c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}
//biggestOfThree(['-2', '-2', '1']);

function sortNumbers(args) {
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];

    if (a >= b && a >= c) {
        if (b >= c) {
            console.log(a + ' ' + b + ' ' + c);
        } else {
            console.log(a + ' ' + c + ' ' + b);
        }
    } else if (b >= c && b >= a) {
        if (c >= a) {
            console.log(b + ' ' + c + ' ' + a);
        } else {
            console.log(b + ' ' + a + ' ' + c);
        }
    } else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        } else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
//sortNumbers(['5', '1', '2']);

function digitAsWord(args) {
    var a = +args[0];
    switch (a) {
        case 0:
            console.log('zero');
            break;
        case 1:
            console.log('one');
            break;
        case 2:
            console.log('two');
            break;
        case 3:
            console.log('three');
            break;
        case 4:
            console.log('four');
            break;
        case 5:
            console.log('five');
            break;
        case 6:
            console.log('six');
            break;
        case 7:
            console.log('seven');
            break;
        case 8:
            console.log('eight');
            break;
        case 9:
            console.log('nine');
            break;
        default:
            console.log('not a digit');
    }
}
//digitAsWord(['5']);

function quadraticEquation(args) {
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];
    var x1, x2, determinant;
    determinant = b * b - 4 * a * c;

    if (determinant > 0) {
        x1 = (-b + Math.sqrt(determinant)) / (2 * a);
        x2 = (-b - Math.sqrt(determinant)) / (2 * a);
        if (x1 > x2) {
            var temp = x1;
            x1 = x2;
            x2 = temp;
        }
        console.log('x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2));
    } else if (determinant === 0) {
        x1 = (-b + Math.sqrt(determinant)) / (2 * a);
        console.log('x1=x2=' + x1.toFixed(2));
    } else {
        console.log('no real roots');
    }
}
//quadraticEquation(['2', '5', '-3']);

function biggestOfFive(args) {
    var firstNum = +args[0];
    var secondNum = +args[1];
    var thirdNum = +args[2];
    var fourthNum = +args[3];
    var fifthNum = +args[4];

    if (firstNum > secondNum && firstNum > thirdNum && firstNum > fourthNum && firstNum > fifthNum) {
        console.log(firstNum);
    } else if (secondNum > firstNum && secondNum > thirdNum && secondNum > fourthNum && secondNum > fifthNum) {
        console.log(secondNum);
    } else if (thirdNum > firstNum && thirdNum > secondNum && thirdNum > fourthNum && thirdNum > fifthNum) {
        console.log(thirdNum);
    } else if (fourthNum > firstNum && fourthNum > secondNum && fourthNum > thirdNum && fourthNum > fifthNum) {
        console.log(fourthNum);
    } else {
        console.log(fifthNum);
    }
}
//biggestOfFive(['5', '2', '2', '4', '1']);

function convertNumberToWords(args) {
    var number = +args[0];
    var result = '';
    var onesLow = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var onesUp = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    var tensLow = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', ];
    var tensUp = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety', ];
    var teensLow = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var teensUp = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

    var hundreds = number / 100 | 0;
    var tens = (number / 10) % 10 | 0;
    var ones = number % 10;

    if (hundreds === 0 && tens === 0) {
        result = onesUp[ones];
    } else if (hundreds === 0) {
        if (tens === 1) {
            result = teensUp[ones];
        } else {
            if (ones === 0) {
                result = tensUp[tens];
            } else {
                result = tensUp[tens] + ' ' + onesLow[ones];
            }
        }
    } else {
        if (tens === 0 && ones === 0) {
            result = onesUp[hundreds] + ' hundred';
        } else if (ones === 0) {
            result = onesUp[hundreds] + ' hundred' + ' and ' + tensLow[tens];
        } else if (tens === 0) {
            result = onesUp[hundreds] + ' hundred' + ' and ' + onesLow[ones];
        } else {
            if (tens === 1 && ones >= 1) {
                result = onesUp[hundreds] + ' hundred' + ' and ' + teensLow[ones];
            } else {
                result = onesUp[hundreds] + ' hundred' + ' and ' + tensLow[tens] + ' ' + onesLow[ones];
            }
        }
    }

    console.log(result);
}
convertNumberToWords(['12']);