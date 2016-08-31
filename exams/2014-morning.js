function solve(params) {
    var s = +params[0];
    var count = 0,
        i, j, k;

    for (i = 0; i < s; i += 1) {
        for (j = 0; j < s; j += 1) {
            for (k = 0; k < s; k += 1) {
                if (i * 10 + j * 4 + k * 3 === s) {
                    count += 1;
                }
            }
        }
    }
    console.log(count);

}

//solve(['40']);

function task2(params) {
    var rowAndCol = params[0].split(' ');
    var row = +rowAndCol[0];
    var col = +rowAndCol[1];
    var dir = params.splice(1),
        arr = [];

    for (var i = 0; i < row; i += 1) {
        arr[i] = dir[i].split(' ');
    }
    var r = 0;
    var c = 0;
    var sum = 0,
        newR = 0,
        newC = 0;
    while (true) {
        if (arr[newR][newC] === 'used') {
            console.log('failed at ' + '(' + newR + ', ' + newC + ')');
            return;
        }
        sum += Math.pow(2, r) + c;
        var whereTo = directions(arr[r][c]);
        r += whereTo.toRow;
        c += whereTo.toCol;

        arr[newR][newC] = 'used';
        newR = r;
        newC = c;

        if (((r >= row) || (r < 0)) || (c >= col) || (c < 0)) {
            console.log('successed with ' + sum);
            return;
        }
    }


    function directions(params) {
        switch (params) {
            case 'dr':
                return {
                    toRow: +1,
                    toCol: +1
                };
            case 'dl':
                return {
                    toRow: +1,
                    toCol: -1
                };
            case 'ur':
                return {
                    toRow: -1,
                    toCol: +1
                };
            case 'ul':
                return {
                    toRow: -1,
                    toCol: -1
                };
        }
    }
}

var test = [
    '3 5',
    'dr dl dl ur ul',
    'dr dr ul ul ur',
    'dl dr ur dl ur'
];

//task2(test);