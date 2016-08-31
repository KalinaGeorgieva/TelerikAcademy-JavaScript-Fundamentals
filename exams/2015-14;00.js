function firstTask(params) {
    var nk = params[0].split(' ').map(Number),
        len = nk[0],
        k = nk[1],
        arr = params[1].split(' ').map(Number),
        result = 0,
        tmp, newArr = [],
        j = 0;

    if (k === 0) {
        for (var i = 0; i < len; i += 1) {
            result += arr[i];
        }
        console.log(result);
        return;
    }
    while (j !== k) {

        for (var i = 0; i < len; i += 1) {
            if (i === 0) {
                if (arr[i] === 0) {
                    tmp = Math.abs(arr[1] - arr[len - 1]);
                    newArr[i] = tmp;
                } else if (arr[i] === 1) {
                    tmp = arr[1] + arr[len - 1];
                    newArr[i] = tmp;
                } else if (arr[i] % 2 === 0) {
                    tmp = max(arr[1], arr[len - 1]);
                    newArr[i] = tmp;
                } else if (!(arr[i] % 2 === 0)) {
                    tmp = min(arr[1], arr[len - 1]);
                    newArr[i] = tmp;
                }
            } else if (i === len - 1) {
                if (arr[i] === 0) {
                    tmp = Math.abs(arr[0] - arr[len - 2]);
                    newArr[i] = tmp;
                } else if (arr[i] === 1) {
                    tmp = arr[0] + arr[len - 2];
                    newArr[i] = tmp;
                } else if (arr[i] % 2 === 0) {
                    tmp = max(arr[0], arr[len - 2]);
                    newArr[i] = tmp;
                } else if (!(arr[i] % 2 === 0)) {
                    tmp = min(arr[0], arr[len - 2]);
                    newArr[i] = tmp;
                }
            } else {
                if (arr[i] === 0) {
                    tmp = Math.abs(arr[i + 1] - arr[i - 1]);
                    newArr[i] = tmp;
                } else if (arr[i] === 1) {
                    tmp = arr[i + 1] + arr[i - 1];
                    newArr[i] = tmp;
                } else if (arr[i] % 2 === 0) {
                    tmp = max(arr[i + 1], arr[i - 1]);
                    newArr[i] = tmp;
                } else if ((arr[i] % 2 !== 0)) {
                    tmp = min(arr[i + 1], arr[i - 1]);
                    newArr[i] = tmp;
                }
            }
        } //end for


        for (i = 0; i < len; i += 1) {
            arr[i] = newArr[i];
        }
        j += 1;
    }
    for (i = 0; i < len; i += 1) {
        result = result + newArr[i];
    }

    console.log(result);

    function max(x, y) {
        return (x > y ? x : y);
    }

    function min(x, y) {
        return (x < y ? x : y);
    }
}

//firstTask(['65 0', '2 2 6 0 1 3 6 3 7 7 0 6 3 3 1 1 2 0 4 4 1 0 4 1 1 3 2 0 8 1 9 0 9 3 5 7 4 5 6 4 3 9 6 1 1 0 9 6 0 0 7 5 5 8 4 8 0 0 0 1 0 7 0 1 0']);


function secondTask(args) {
    let r = +args[0];
    let board = args.slice(2, 2 + r);
    let moves = args.slice(3 + r);

    function parseMove(move) {
        let cells = move.split(' ');
        return {
            from: {
                r: r - (+cells[0][1]),
                c: cells[0].charCodeAt(0) - 97
            },
            to: {
                r: r - (+cells[1][1]),
                c: cells[1].charCodeAt(0) - 97
            }
        };
    }

    function canMoveBishop(from, to) {
        if (Math.abs(from.r - to.r) !== Math.abs(from.c - to.c)) {
            return false;
        }

        if ((from.c === to.c) && (from.r === to.r)) {
            return false;
        }
        let deltaR = from.r > to.r ? -1 : 1;
        let deltaC = from.c > to.c ? -1 : 1;

        while ((from.r !== to.r) || (from.c !== to.c)) {
            from.r += deltaR;
            from.c += deltaC;
            if (board[from.r][from.c] !== '-') {
                return false;
            }
        }
        return true;

    }

    function canMoveRook(from, to) {
        if ((from.c !== to.c) && (from.r !== to.r)) {
            return false;
        }

        if ((from.c === to.c) && (from.r === to.r)) {
            return false;
        }

        let deltaR = from.r > to.r ? -1 : 1;
        let deltaC = from.c > to.c ? -1 : 1;

        if (from.r === to.r) {
            deltaR = 0;
        } else {
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



    function canMoveQueen(from, to) {
        return canMoveBishop(from, to) || canMoveRook(from, to);
    }

    for (let m of moves) {
        let move = parseMove(m);
        let piece = board[move.from.r][move.from.c];

        if (piece === 'R') {
            let canMove = canMoveRook(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        } else if (piece === 'Q') {
            let canMove = canMoveQueen(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');

        } else if (piece === 'B') {
            let canMove = canMoveBishop(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        } else {
            console.log('no');
        }
    }
}

var test = [
    '3',
    '4',
    '--R-',
    'B--B',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 b3',
    'd2 c1',
    'b1 b2',
    'c3 b1',
    'a2 a3',
    'd1 d3'
];

//secondTask(test);

function thirdTask(args) {
    let rules = {};
    let isInRule = false;

    let noSpace = {
        '+': true,
        '>': true,
        '.': true,
        '#': true,
        '{': true,
        '~': true
    };
    Array.prototype.last = function() {
        return this[this.length - 1];
    };
    String.prototype.last = function() {
        return this[this.length - 1];
    };
    let orderIndex = 0;
    let currentSelector = null;

    for (let i = 0; i < args.length; i += 1) {
        if (isInRule) {
            let split = args[i].replace(/\s+/g, '').split(':');

            if (split.last() === '}') {
                isInRule = false;
            } else {
                let property = {
                        name: split[0],
                        value: split[1]
                    },
                    properties = rules[currentSelector].props;

                for (let k = 0; k < properties.length; k += 1) {
                    if (properties[k].name === property.name) {
                        properties.splice(k, 1);
                        break;
                    }
                }
                properties.push(property);
            }
        } else {
            let split = args[i].trim().split(/\s+/);
            let selector = '';

            for (let j = 0; j < split.length; j += 1) {

                if (selector === '' || noSpace[split[j][0]] || noSpace[selector.last()]) {
                    selector += split[j];
                } else {
                    selector += ' ' + split[j];
                }

                if (selector[selector.length - 1] === '{') {
                    isInRule = true;
                    currentSelector = selector;
                    if (!rules[currentSelector]) {
                        rules[currentSelector] = {
                            props: [],
                            order: orderIndex
                        };
                        orderIndex += 1;
                    }

                }
            }
        }
    }
    let result = [];
    for (let selector in rules) {
        result[rules[selector].order] = {
            name: selector,
            rules: rules[selector].properties,
            order: rules[selector].order
        };
    }
}

thirdTask([
    '#the-big-b{',
    'color: yellow;',
    'size: big;',
    '}',
    '.muppet{',
    'powers: all;',
    'skin: fluffy;',
    '}',
    '.water-spirit {',
    'powers: water;',
    'alignment : not-good;',
    '}',
    'all{',
    'meant-for: nerdy-children;',
    '}',
    '.muppet {',
    'powers: everything;',
    '}',
    'all .muppet {',
    'alignment : good ;',
    '}',
    '.muppet+ .water-spirit{',
    'power: everything-a-muppet-can-do-and-water;',
    '}'
]);

//cuki 
function solve(args) {
    let allSelectors = {};

    let inSelector = false;

    let propertyId = 0;

    for (let i in args) {
        let line = args[i];

        if (line.indexOf('}') !== -1) {
            inSelector = false;
            continue;
        }

        let indexOfCurly = line.indexOf('{');
        if (indexOfCurly === -1) { // in property
            line = line.split(':');
            let name = line[0].trim();
            line = line[1].split(';');
            let value = line[0].trim();

            //	if(allSelectors[inSelector].hasOwnProperty(name)) {
            //		delete allSelectors[inSelector][name];
            //	}
            allSelectors[inSelector][name] = {
                value: value,
                id: propertyId
            };

            propertyId += 1;

            continue;
        }

        // openning selector

        let selectors = line.substr(0, indexOfCurly).trim();
        selectors = selectors.replace(/\s*([>~+ ])\s*/g, '$1');

        inSelector = selectors;

        if (!allSelectors.hasOwnProperty(selectors)) {
            allSelectors[selectors] = {};
        } else { // merge
        }
    }

    let minified = [];
    for (let selector in allSelectors) {
        minified.push(selector + '{');

        // Object.keys(allSelectors[selector])
        let properties = []
        for (let name in allSelectors[selector]) {
            properties.push({
                name: name,
                value: allSelectors[selector][name].value,
                id: allSelectors[selector][name].id
            });
        }

        properties.sort(function(a, b) {
            return a.id - b.id;
        });

        properties.forEach(function(p) {
            minified.push(`${p.name}:${p.value};`);
        });

        // minified[minified.length - 1] = minified[minified.length - 1].split(/;/)[0];
        minified.push('}');
    }

    console.log(minified.join('').replace(/;}/g, '}'));
}

solve([
    '#the-big-b{',
    '		color: yellow;',
    'size: big;',
    '}',
    '.muppet{',
    'powers: all;',
    'skin: fluffy;',
    '}',
    '.water-spirit {',
    'powers: water;',
    'alignment : not-good;',
    '}',
    'all{',
    'meant-for: nerdy-children;',
    '}',
    '.muppet {',
    'powers: everything;',
    '}',
    'all .muppet {',
    '	alignment : good       ;',
    '}',
    '.muppet+     .water-spirit{',
    'power: everything-a-muppet-can-do-and-water;',
    '}'
]);