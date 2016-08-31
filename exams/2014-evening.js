function solve(params) {
    var s = +params[0],
        c1 = +params[1],
        c2 = +params[2],
        c3 = +params[3];
    var answer = 0,
        best = -1,
        i, j, k;

    for (i = 0; i <= s / c1; i += 1) {
        for (j = 0; j <= s / c2; j += 1) {
            for (k = 0; k <= s / c3; k += 1) {
                if ((i * c1 + j * c2 + k * c3) <= s) {
                    answer = i * c1 + j * c2 + k * c3;
                    if (answer > best) {
                        best = answer;
                    }
                }
            }
        }
    }

    console.log(best);
}

var test = ['200', '200', '199', '198'];
//solve(test);

function task2(params) {
    var rowsAndCells = params[0].split(' ');
    var row = +rowsAndCells[0];
    var col = +rowsAndCells[1];
    var dir = params.splice(1);
    var arr = [];
    for (var i = 0; i < row; i += 1) {
        arr[i] = dir[i].split('').map(Number);
    }

    var r = row - 1;
    var c = col - 1;
    var sum = 0,
        usedR = row - 1,
        usedC = col - 1,
        count = 0;
    while (true) {
        if (arr[usedR][usedC] === 'used') {
            console.log('Sadly the horse is doomed in ' + count + ' jumps');
            return;
        }
        sum += Math.pow(2, r) - c;
        var whereTo = direction(arr[r][c]);
        r += whereTo.toRow;
        c += whereTo.toCol;
        count += 1;
        arr[usedR][usedC] = 'used';
        usedR = r;
        usedC = c;
        if (r >= row || r < 0 || c >= col || c < 0) {
            console.log('Go go Horsy! Collected ' + sum + ' weeds');
            return;
        }
    }

    function direction(number) {
        switch (number) {
            case 1:
                return {
                    toRow: -2,
                    toCol: 1
                };
            case 2:
                return {
                    toRow: -1,
                    toCol: +2
                };
            case 3:
                return {
                    toRow: 1,
                    toCol: +2
                };
            case 4:
                return {
                    toRow: 2,
                    toCol: 1
                };
            case 5:
                return {
                    toRow: 2,
                    toCol: -1
                };
            case 6:
                return {
                    toRow: 1,
                    toCol: -2
                };
            case 7:
                return {
                    toRow: -1,
                    toCol: -2
                };
            case 8:
                return {
                    toRow: -2,
                    toCol: -1
                };
        }
    }

}

var test2 = [
    '3 5',
    '54361',
    '43326',
    '52188',
];
task2(test2);


