function task1(params) {
    var len = parseInt(params[0]),
        k = parseInt(params[1]),
        arr = params[2].split(' ').map(Number),
        result = 0,
        j = 0,
        newArr = [],
        m = 0,
        resStr = [],
        n = 0,
        count = 0,
        regex = /\s/g;

    for (var i = 0; i < len - 1; i += 1) {
        m = i;

        for (var j = 0; j < k; j += 1) {
            newArr[j] = arr[m];
            m += 1;
        }
        //console.log(newArr);
        count += 1;
        result += sum(newArr, k);
        resStr[n] = result;
        result = 0;
        n += 1;

        if (i + k >= len) {
            break;
        }


    }

    console.log(resStr.join(' ').replace(regex, ','));

    function sum(array, k) {
        var min = array[0],
            max = array[0];
        for (var i = 0; i < k; i += 1) {
            if (min > array[i])
                min = array[i];
            if (max < array[i])
                max = array[i];
        }
        return max + min;
    }
}

var test = ['5', '3', '7 7 8 9 10'];
task1(test);

function task2(params) {
    var str = params[0],
        offset = +params[1],
        CONSTANTS = {
            ALPHABET: 'abcdefghijklmnopqrstuvwxyz'
        };

    var firstRes = compression(str);
    var secondRes = cyper(firstRes, offset);
    // console.log(firstRes);
    // console.log(secondRes);
    var sumOdd = 0;
    var even = 1;
    for (var i = 0; i < secondRes.length; i += 1) {
        if (+secondRes[i] % 2 === 0) {
            sumOdd += +secondRes[i];
        } else {
            even *= +secondRes[i];
        }
    }
    console.log(sumOdd);
    console.log(even);

    function compression(arr) {
        var res = '',
            count = 0;
        for (var i = 0; i < arr.length; i += 1) {

            if (arr[i] === arr[i + 1]) {

                while (arr[i] === arr[i + 1]) {
                    i += 1;
                    count += 1;
                }

                if (count === 1) {
                    count = 0;
                    res += arr[i];
                    res += arr[i];
                    continue;
                } else {
                    count += 1;
                    res += count;
                    res += arr[i];
                    count = 0;
                }

            } else
                res += arr[i];
        }
        if (res.length < arr.length) {
            return res;
        } else
            return arr;
    }

    function cyper(arrStr, k) {
        var res = '',
            tmp = 0;

        for (var i = 0; i < arrStr.length; i += 1) {
            if (arrStr[i] >= 0 || arrStr <= 9) {
                res += arrStr[i];
            } else {
                tmp = arrStr[i].charCodeAt(0);
                var indexStr = CONSTANTS.ALPHABET.indexOf(arrStr[i]);
                var newInd = indexStr - k;
                if (newInd < 0) {
                    while (newInd < 0) {
                        newInd = 26 + newInd;
                    }
                }
                //var arr1 = CONSTANTS.ALPHABET.split('');
                var char = CONSTANTS.ALPHABET[newInd];
                var asci = char.charCodeAt(0);

                res += tmp ^ asci;
            }
        }
        return res;
    }

}

var test2 = ['aaaabbbccccaa', '3'];
task2(test2);