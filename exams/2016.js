function task1(args) {
    var a = args[0].split(' ').map(Number);
    var i = 0,
        len = 0,
        arr = [],
        isPeak = false,
        sum = 0,
        count = 0;
    while (a[i] !== undefined) {
        arr[i] = a[i];
        i += 1;
    }
    len = arr.length;

    var newArr = [],
        k = 0;
    for (let j = 1; j < len - 1; j += 1) {
        if (arr[j] > arr[j - 1] && arr[j] > arr[j + 1]) {
            isPeak = true;
        }
        if (isPeak) {
            newArr[k] = j;
            k += 1;
        }
        isPeak = false;
    }

    for (let i = 1; i < newArr.length; i += 1) {
        if (newArr[i] - newArr[i - 1] === 2) {
            // console.log(newArr[i - 1]);
            sum += arr[newArr[i - 1] + 1];
        }
    }
    console.log(sum);
}

//task1([
//    "53 20 1 30 2 40 3 3 10 1"
//]);

function task2(args) {
    var rowsAndCells = args[0].split(' ');
    var row = +rowsAndCells[0];
    var col = +rowsAndCells[1];
    var coord = args[1].split(';');
    var w = coord[0].split(' ');
    var wR = +w[0],
        wC = +w[1];
    var n = coord[1].split(' '),
        nR = +n[0],
        nC = +n[1];
    var l = coord[2].split(' '),
        lR = +l[0],
        lC = +l[1];

    var dir = args.splice(2);

    var startRowW = wR,
        startColW = wC;
    var startRowN = nR,
        startColN = nC;
    var startRowL = lR,
        startColL = lC;

    var i = 0;

    var field = [];
    for (let i = 0; i < row; i += 1) {
        field[i] = [];
        for (let k = 0; k < col; k += 1) {
            field[i][k] = k + i;
        }
    }

    //console.log(field);

    while (true) {

        var obj = directions(dir[i]);
        i += 1;

        if (obj.what === 'mv') {
            if (obj.whoIs === "Wboup") {
                if (obj.whereTo === 'u') {
                    var tmp = startRowW - 1;
                    if (tmp >= row || tmp < 0) {
                        startRowW += 0;
                    } else
                        startRowW += -1;
                } else if (obj.whereTo === 'd') {
                    var tmp = startRowW + 1;
                    if (tmp >= row || tmp < 0) {
                        starRowW += 0;
                    } else
                        startRowW += 1;
                } else if (obj.whereTo === 'l') {
                    var tmp = startColW - 1;
                    if (tmp >= col || tmp < 0) {
                        startColW += 0;
                    } else
                        startColW += -1;
                } else if (obj.whereTo === 'r') {
                    var tmp = startColW + 1;
                    if (tmp >= col || tmp < 0) {
                        startColW += 0;
                    } else
                        startColW += 1;
                }
                // console.log('w ' + startRowW, startColW);

            } else if (obj.whoIs === "Nbslbub") {
                if (obj.whereTo === 'u') {
                    var tmp = startRowN - 1;
                    if (tmp >= row || tmp < 0) {
                        startRowN += 0;
                    } else
                        startRowN += -1;
                } else if (obj.whereTo === 'd') {
                    var tmp = startRowN + 1;
                    if (tmp >= row || tmp < 0) {
                        startRowN += 0;
                    } else
                        startRowN += 1;
                } else if (obj.whereTo === 'l') {
                    var tmp = startColN - 1;
                    if (tmp >= col || tmp < 0) {
                        startColN += 0;
                    } else
                        startColN += -1;
                } else if (obj.whereTo === 'r') {
                    var tmp = startColN + 1;
                    if (tmp >= col || tmp < 0) {
                        startColN += 0;
                    } else
                        startColN += 1;
                }
                // console.log('n ' + startRowN, startColN);
            } else {
                {
                    if (obj.whereTo === 'u') {
                        var tmp = startRowL - 1;
                        if (tmp >= row || tmp < 0) {
                            startRowL += 0;
                        } else
                            startRowL += -1;
                    } else if (obj.whereTo === 'd') {
                        var tmp = startRowL + 1;
                        if (tmp >= row || tmp < 0) {
                            startRowL += 0;
                        } else
                            startRowL += 1;
                    } else if (obj.whereTo === 'l') {
                        var tmp = startColL - 1;
                        if (tmp >= col || tmp < 0) {
                            startColL += 0;
                        } else
                            startColL += -1;
                    } else if (obj.whereTo === 'r') {
                        var tmp = startColL + 1;
                        if (tmp >= col || tmp < 0) {
                            startColL += 0;
                        } else
                            startColL += 1;
                    }
                    // console.log('l ' + startRowL, startColL);

                }
            }
        } else if (obj.what === 'lay') {
            field[startRowL][startColL] = 'X';
        }

        if (startRowW === startRowN && startColW === startColN) {
            field[startRowW][startColW] = -1;
        }

        if (field[startRowW][startColW] === 'X' && field[startRowN][startColN] === 'X') {
            console.log('Lsjtujzbo is saved! ' + startRowW + ' ' + startColW + ' ' + startRowN + ' ' + startColN);
            return;
        }

        if (startRowL === row - 1 && startColL === col - 1) {
            console.log('Lsjtujzbo is saved! ' + startRowW + ' ' + startColW + ' ' + startRowN + ' ' + startColN);
            return;
        }

        var first1 = startRowL - 1;
        var first2 = startColL - 1;
        var cRL = startRowL + 1;
        var cCl = startColL + 1;

        if ((first1 === startRowW && first2 === startColW) || (first1 === startRowN && first2 === startColN) ||
            (cRL === startRowW && cCl === startColW) || (cRL === startRowN && cCl === startColN) ||
            (first1 === startRowW && startColL === startColW) || (first1 === startRowN && startColL === startColN) ||
            (startRowL === startRowW && first2 === startColW) || (startRowL === startRowN && first2 === startColN)) {
            console.log('The trolls caught Lsjtujzbo at ' + startRowL + ' ' + startColL);
            return;
        }
    }

    function directions(str) {
        var where = str.split(' ');
        var mvOrLay = where[0];
        var who = where[1];
        var whereGoing = where[2];

        return {
            what: mvOrLay,
            whoIs: who,
            whereTo: whereGoing
        };
    }

}

var test = [
    '5 5',
    '1 1;0 1;2 3',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d'
];

//task2(test);


//variant 1

function FirstTask(args) {
    var arr = args[0].split(' ').map(Number),
        isPeak = false,
        j = 0,
        len = 0,
        newArr = [],
        k = 0;

    while (arr[j] !== undefined) {
        len += 1;
        j += 1;
    }

    for (var i = 0; i < len; i += 1) {
        if (i === 0 || i === len - 1) {
            isPeak = true;
        } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            isPeak = true;
        }
        if (isPeak) {
            newArr[k] = i;
            k += 1;
        }
        isPeak = false;
    }
    var n = 0,
        sum = 0,
        best = -1;

    for (var m = 0; m < newArr.length; m += 1) {
        while (n !== newArr[m]) {
            sum += arr[n];
            n += 1;
        }
        if (n !== 0) {
            sum += arr[n];
        }
        best = Math.max(best, sum);
        sum = 0;
    }
    console.log(best);

    //console.log(newArr);
}

//FirstTask(["5 1 7 4 8"]);

function secondTask(args) {
    var rowsAndCells = args[0].split(' ');
    var row = +rowsAndCells[0];
    var col = +rowsAndCells[1];
    var deb = args[1].split(';');
    var debris = [];
    for (var i = 0; i < deb.length; i += 1) {
        debris[i] = deb[i].split(' ').map(Number);
    }
    var commands = +args[2];
    var dir = args.splice(3);
    var cuki = [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3]
    ];
    var countCuki = 4;
    var countKoce = 4;
    var koceto = [
        [row - 1, col - 1],
        [row - 1, col - 2],
        [row - 1, col - 3],
        [row - 1, col - 4]
    ];

    for (var i = 0; i < commands; i += 1) {
        var directions = get[dir[i]];

    }

    function get(params) {
        var par = params.split(' ');
        var what = par[0];
        if (what === 'mv') {
            return {
                what: par[0],
                id: +par[1],
                how: +par[2],
                where: par[3]
            };
        } else {
            return {
                what: par[0],
                how: +par[1],
                where: par[2]
            };
        }
    }
}

var test1 = [
    '5 5',
    '2 0;2 1;2 2;2 3;2 4',
    '13',
    'mv 7 2 l',
    'x 7 u',
    'x 0 d',
    'x 6 u',
    'x 5 u',
    'x 2 d',
    'x 3 d',
    'mv 4 1 u',
    'mv 4 4 l',
    'mv 1 1 l',
    'x 4 u',
    'mv 4 2 r',
    'x 2 d'
];

secondTask(test1);