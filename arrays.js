function increaseArrayMembers(params) {
    var number = +params[0];
    for (var i = 0; i < number; i += 1) {
        console.log(i * 5);
    }
}

function compare(args) {
    var word = args[0].split("\n"),
        string1 = word[0],
        string2 = word[1];

    if (string1 > string2)
        console.log('>');
    else if (string1 < string2)
        console.log('<');
    else
        console.log('=');
}

function longest(args) {
    var arr = args[0].split('\n'),
        n = +arr[0],
        numbers = arr.slice(1),

        current = +numbers[0],
        sum = 1,
        best = 0;

    for (var i = 0; i < n; i += 1) {

        if (current === +numbers[i + 1]) {
            sum++;
        } else {
            if (sum > best) {
                best = sum;
            }
            sum = 1;
        }
        current = +numbers[i + 1];
    }

    console.log(best);
}

function longestIncreasing(args) {
    var arr = args[0].split('\n'),
        n = +arr[0],
        numbers = arr.slice(1),

        current = +numbers[0],
        sum = 1,
        best = 0;

    for (var i = 0; i < n; i += 1) {

        if (current < +numbers[i + 1]) {
            sum++;
        } else {
            if (sum > best) {
                best = sum;
            }
            sum = 1;
        }
        current = numbers[i + 1];
    }

    console.log(best);
}


function sort(args) {
    var input = args[0].split('\n'),
        n = +input[0],
        numbers = input.slice(1),
        min = numbers[0];

    for (var j = 0; j < n; j += 1) {
        min = numbers[j];
        for (var i = j; i < n; i += 1) {

            if (+numbers[i] < min) {
                min = +numbers[i];
                numbers[i] = +numbers[j];
                numbers[j] = min;
            }
        }
    }
    console.log(numbers.join('\n'));
}


function mostfrequent(args) {
    var input = args[0].split('\n'),
        n = input[0],
        numbers = input.slice(1),
        current = numbers[0],
        counter = 1,
        bestNum = 0,
        bestCounter = 0;

    numbers.sort();

    for (var i = 0; i < n; i += 1) {

        if (current === numbers[i + 1]) {
            counter++;
        } else {
            if (counter > +bestCounter) {
                bestCounter = counter;
                bestNum = numbers[i];
            }
            counter = 1;
        }
        current = numbers[i + 1];
    }
    console.log(bestNum + " (" + bestCounter + " times)");
}

function search(args) {
    var arr = (args + '').split('\n').map(Number),
        n = +arr[0],
        x = +arr[arr.length - 1],
        min = 0,
        max = n - 1,
        mid = 0;

    arr.shift();
    arr.pop();
    while (min <= max) {

        mid = ((min + max) / 2) | 0;

        if (x === +arr[mid]) {
            return mid;
        } else if (x < +arr[mid]) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    console.log('-1');
}

function prime(args) {
    var number = +args[0],
        isPrime;

    for (var i = number; i >= 2; i -= 1) {
        isPrime = true;
        for (var j = 2; j <= Math.sqrt(number); j += 1) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            return i;
        }
    }
    console.log(-1);
}