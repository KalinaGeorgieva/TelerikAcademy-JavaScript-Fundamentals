function print(name) {
    console.log('Hello, ' + name + "!");
}

function getMax(nums) {
    var numbers = nums[0].split(' ');

    return maxNumber(+numbers[0], maxNumber(+numbers[1], +numbers[2]));

    function maxNumber(a, b) {
        if (a > b)
            return a;
        return b;
    }
}


function digit(args) {
    var number = +args[0];
    switch ((number % 10) | 0) {
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
    }
}

function howManyTimes(args) {
    var length = +args[0],
        second = args[1].split(' '),
        numberToFind = +args[2],
        count = 0;

    for (var i = 0; i < length; i += 1) {
        if (numberToFind === +second[i])
            count += 1;
    }
    console.log(count);
}

function larger(args) {
    var
        length = +args[0],
        arr = args[1].split(' '),
        count = 0;
    for (var i = 1; i < length - 1; i += 1) {
        if ((+arr[i] > +arr[i - 1]) && (+arr[i] > +arr[i + 1]))
            count += 1;
    }
    console.log(count);
}

function firstLarger(args) {
    var
        length = +args[0],
        arr = args[1].split(' ');
    for (var i = 1; i < length - 1; i += 1) {
        if ((+arr[i] > +arr[i - 1]) && (+arr[i] > +arr[i + 1])) {
            return i;
        }
    }
    return -1;
}

function sort(args) {
    var length = +args[0],
        arr = args[1].split(' '),
        result = [];

    for (var i = 0, j = length - 1; i < length; i += 1, j -= 1) {
        result[j] = findMax(arr, i);
    }
    console.log(result.join(' '));

    function findMax(array, index) {
        index = 0;
        var max = +array[index],
            findIndex = 0;

        for (var k = index; k < length - index; k += 1) {
            if (max < +array[k + 1]) {
                max = +array[k + 1];
                findIndex = k + 1;
            }
        }
        array.splice(findIndex, 1);
        return max;
    }
}



sort(['10', '3 4 1 5 2 6 8 9 7 10']);