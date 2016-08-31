function solve(params) {
    var arr = params[0].split(' ').map(Number),
        isPeak = false,
        arrPeak = [],
        j = 0,
        count = 0,
        best = 0;

    for (var i = 0, len = arr.length; i < len; i += 1) {
        if ((arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) || i === 0 || i === len - 1) {
            isPeak = true;
        }
        if (isPeak) {
            arrPeak[j] = i;
            j += 1;
        }

        isPeak = false;
    }
    for (var i = 1; i < arrPeak.length; i += 1) {
        count = arrPeak[i] - arrPeak[i - 1];
        if (count > best) {
            best = count;
        }
        count = 0;

    }
    console.log(best);

}

//solve(['10 1 2 3 4 5 4 3 2 1 10']);

function task2(args) {
    var row = +args[0];
    var board = args.slice(2, row + 2);
    var moves = args.slice(row + 3);

    function parseMove(params) {
        var cells = params.split(' ');
        return {
            from: {
                r: row - (+cells[0][1]),
                c: cells[0].charCodeAt(0) - 97
            },
            to: {
                r: row - (+cells[1][1]),
                c: cells[1].charCodeAt(0) - 97
            }
        };
    }

    function canMoveQueen(from, to) {
        if (!((from.c === to.c) || (from.r === to.r)) &&
            (Math.abs(from.r - to.r) !== Math.abs(from.c - to.c))) {
            return false;
        }

        if ((from.c === to.c) && from.r === to.r) {
            return false;
        }

        var deltaR = from.r > to.r ? -1 : 1;
        var deltaC = from.c > to.c ? -1 : 1;
        if (from.r === to.r) {
            deltaR = 0;
        }
        if (from.c === to.c) {
            deltaC = 0;
        }

        while ((from.r !== to.r) || (from.c !== to.c)) {
            from.r += deltaR;
            from.c += deltaC;
            if (board[from.r][from.c] !== '-') {
                return false;
            }
        }
        return true;
    }

    function canMoveKnight(from, to) {
        //not working in all cases
        if (((((from.c === to.c) || (from.r === to.r)) ||
                (Math.abs(from.r - to.r) === Math.abs(from.c - to.c))))) {
            return false;
        }

        if ((from.c === to.c) && from.r === to.r) {
            return false;
        }
        var deltaR, deltaC;

        if (Math.abs(from.r - to.r) !== 1) {
            if (from.r > to.r) {
                deltaR = -2;
                if (from.c > to.c) {
                    deltaC = -1;
                } else {
                    deltaC = 1;
                }
            } else {
                deltaR = 2;
                if (from.c > to.c) {
                    deltaC = -1;
                } else {
                    deltaC = 1;
                }
            }
        } else if (Math.abs(from.r - to.r) === 1) {
            if (from.c > to.c) {
                deltaC = -2;
                if (from.r > to.r) {
                    deltaR = -1;
                } else {
                    deltaR = 1;
                }
            } else if (from.c < to.c) {
                deltaC = 2;
                if (from.r > to.r) {
                    deltaR = -1;
                } else {
                    deltaR = 1;
                }
            }
        }

        while (from.r !== to.r || from.c !== to.c) {
            from.r += deltaR;
            from.c += deltaC;
            if (board[from.r][from.c] !== '-') {
                return false;
            }
        }

        //return false; //doncho
        return true;
    }


    for (var m of moves) {
        var move = parseMove(m);
        var piece = board[move.from.r][move.from.c];

        if (piece === 'Q') {
            var canMove = canMoveQueen(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        } else if (piece === 'K') {
            var canMove = canMoveKnight(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        } else {
            console.log('no');
        }
    }
}

var test = [
    '7',
    '8',
    '---Q----',
    'Q-------',
    '------K-',
    '--------',
    '-------K',
    '----K---',
    '-K------',
    '8',
    'd7 d3',
    'a6 f4',
    'b1 c1',
    'h3 f4',
    'e2 h1',
    'g5 c4',
    'g5 f7',
    'h3 g5'
];

//task2(test);