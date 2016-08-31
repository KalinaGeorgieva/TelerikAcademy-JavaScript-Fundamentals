//evening

function task1(params) {
    var n = +params[0];
    var arr = params.splice(1).map(Number),
        sum = 0,
        cpySum = 0,
        bestSum = -Infinity;

    for (var i = 0; i < n - 1; i += 1) {
        for (var j = i; j < n; j += 1) {
            sum += arr[j];
            bestSum = Math.max(sum, bestSum);
        }
        sum = 0;
    }

    console.log(bestSum);
}

// var test = ['6', '1', '3', '-5', '8', '7', '-6 '];
// task1(test);

function task2(args) {
    var rowsAndCells = args[0].split(' ');
    var row = +rowsAndCells[0],
        col = +rowsAndCells[1];
    var start = args[1].split(' ');
    var startRow = +start[0],
        startCol = +start[1];
    var array = args.splice(2, row + 1);

    var arr = [];
    for (var i = 0; i < row; i += 1) {
        arr[i] = array[i].split('');
    }
    var r = startRow;
    var c = startCol,
        sum = 0,
        usedR = startRow,
        usedC = startCol,
        count = 0;

    while (true) {
        if (arr[usedR][usedC] === 'used') {
            console.log('lost ' + count);
            return;
        }

        sum += r * col + c + 1;
        var whereTo = directions(arr[r][c]);
        r += whereTo.toRow;
        c += whereTo.toCol;
        count += 1;

        arr[usedR][usedC] = 'used';
        usedR = r;
        usedC = c;
        if (r >= row || r < 0 || c >= col || c < 0) {
            console.log('out ' + sum);
            return;
        }

    }


    function directions(params) {
        switch (params) {
            case 'l':
                return {
                    toRow: 0,
                    toCol: -1
                };

            case 'r':
                return {
                    toRow: 0,
                    toCol: 1
                };
            case 'u':
                return {
                    toRow: -1,
                    toCol: 0
                };
            case 'd':
                return {
                    toRow: 1,
                    toCol: 0
                };
        }
    }
}

var test2 = [
    "5 8",
    "0 0",
    "rrrrrrrd",
    "rludulrd",
    "lurlddud",
    "urrrldud",
    "ulllllll"
];

//task2(test2);

//morning 

function task1Morning(params) {
    var n = +params[0];
    var a = params.slice(1);
    var arr = a.map(Number),
        count = 0;

    for (var i = 0; i < n; i += 1) {
        while (arr[i] <= arr[i + 1]) {
            i += 1;
        }
        count += 1;
    }

    console.log(count);
}

//var test2 = ['9', '1', '8', '8', '7', '6', '5', '7', '7', '6'];
//task1Morning(test2);

function task2Morning(args) {
    var all = args[0].split(' '),
        row = +all[0],
        col = +all[1],
        jumps = +all[2],
        start = args[1].split(' '),
        startRow = +start[0],
        startCol = +start[1],
        jumpPosition = args.slice(2, jumps + 2),
        arr = [];
    for (var i = 0; i < jumps; i += 1) {
        arr[i] = jumpPosition[i].split(' ').map(Number);
    }

    var field = [];
    for (var i = 0; i < row; i += 1) {
        field[i] = [];
        for (var j = 0; j < col; j += 1) {
            field[i][j] = i * col + j + 1;
        }
    }
    var r = startRow;
    var c = startCol,
        newR = Infinity,
        newC = Infinity,
        count = 0,
        sum = 0,
        k = 0,
        countJumps = 0,
        usedC = startCol,
        usedR = startRow;

    while (true) {
        if (r === newR && c === newC) {
            sum += 0;
        } else {
            if (field[usedR][usedC] === 'used') {
                console.log('caught ' + count);
            } else
                sum += r * col + c + 1;
        }
        newR = r;
        newC = c;
        count += 1;
        countJumps += 1;
        if (countJumps > jumps) {
            r += startRow;
            c += startCol;
            countJumps = 0;
            k = 0;
        } else {
            var whereTo = direction(arr[k]);
            r += whereTo.toRow;
            c += whereTo.toCol;
            k += 1;
        }
        field[usedR][usedC] = 'used';
        usedR = r;
        usedC = c;
        if (r >= row || r < 0 || c >= col || c < 0) {
            console.log('escaped ' + sum);
            return;
        }
    }

    function direction(params) {
        return {
            toRow: params[0],
            toCol: params[1]
        };
    }


}

var test3 = ['6 7 3', '0 0', '2 2', '-2 2', '3 -1'];
task2Morning(test3);