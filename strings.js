function reverse(args) {
    var result = '',
        arr = args[0];
    for (var i = 0, len = arr.length; i < len; i += 1) {
        result = result + arr[len - i - 1];
    }
    console.log(result);
}
//reverse(['sample']);


function checkBrackets(params) {
    var str = params[0],
        len = str.length,
        resultLeft = '',
        resultRight = '';
    str.trim();
    if (str[0] === ')' || str[len - 1] === '(') {
        console.log('Incorrect');
        return;
    } else {
        for (var i = 0; i < len; i += 1) {
            if (str[i] === ')')
                resultLeft = resultLeft + str[i];
            if (str[i] === '(')
                resultRight = resultRight + str[i];
        }
    }
    if (resultLeft.length === resultRight.length)
        console.log('Correct');
    else
        console.log('Incorrect');
}
//checkBrackets(['((a+b)/5-d)']);


function searchSubstr(params) {
    var tosearCh = params[0].toLowerCase(),
        str = params[1].toLowerCase(),
        count = 0,
        i;
    var index = str.indexOf(tosearCh);
    while (index != -1) {
        count++;
        index = str.indexOf(tosearCh, index + 1);
    }

    console.log(count);
}
//  searchSubstr(['liv', 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);


//searchSubstr with regex
function searchSubstrRegex(params) {
    var tosearCh = params[0],
        str = params[1],
        regex = new RegExp(tosearCh, 'ig'),
        arr = str.match(regex);

    console.log(arr.length);
}

//searchSubstrRegex(['in', 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);


function nbsp(params) {
    var str = params[0];
    var index = str.indexOf(' ');
    while (index != -1) {
        str = str.replace(' ', '&nbsp;');
        index = str.indexOf(' ', index + 1);
    }
    console.log(str);

}
//nbsp(['This text contains 4 spaces!!']);


//nbps with regex
function nbpsRegex(params) {
    var str = params[0],
        regex = /\s/g;
    console.log(str.replace(regex, '&nbsp;'));
}

//nbpsRegex(['This text contains 4 spaces!!']);

function parseUrl(params) {
    var str = params[0],
        protocol = '',
        server = '',
        resource = '',
        len = str.length,
        index = str.indexOf(':'),
        newStr = '',
        newInd = 0,
        i;
    for (i = 0; i < index; i += 1) {
        protocol = protocol + str[i];

    }
    for (i = index + 3; i < len; i += 1) {
        newStr = newStr + str[i];
    }
    newInd = newStr.indexOf('/');
    for (i = 0; i < newInd; i += 1) {
        server = server + newStr[i];
    }
    for (i = newInd; i < newStr.length; i += 1) {
        resource = resource + newStr[i];
    }
    console.log('protocol: ' + protocol);
    console.log('server: ' + server);
    console.log('resource: ' + resource);
}
//parseUrl(['http://telerikacademy.com/Courses/Courses/Details/239']);


function parseTags(params) {
    var str = params[0],
        len = str.length,
        i = 0,
        resL = '',
        resU = '',
        result = '';

    for (i = 0; i < len; i += 1) {
        if (str[i] !== '<')
            result = result + str[i];
        else {
            if (str[i + 1] === '/') {
                while (str[i + 1] !== '>')
                    i += 1;
                i += 1;
            } else
            if (str[i + 1] === 'l') {
                while (str[i + 1] !== '>') {
                    i += 1;
                }
                i += 2;
                while (str[i] !== '<') {
                    resL = resL + str[i];
                    i += 1;
                }
                resL = resL.toLowerCase();
                result = result + resL;
                resL = '';
                i -= 1;
            } else if (str[i + 1] === 'u') {
                while (str[i + 1] !== '>') {
                    i += 1;
                }
                i += 2;
                while (str[i] !== '<') {
                    resU = resU + str[i];
                    i += 1;
                }
                resU = resU.toUpperCase();
                result = result + resU;
                resU = '';
                i -= 1;
            } else if (str[i + 1] === 'o') {
                while (str[i + 1] !== '>') {
                    i += 1;
                }
                i += 1;
            }
        }
    }
    console.log(result);
}
//not working in this case:                ...........................................
//parseTags(['We are <lowcase> <upcase> <orgcase>liViNg</orgcase> in a</upcase></lowcase>  yellow submarine. We doN\'t have anything else.']);


//first version - working directly with the array of strings
function extractText1(arr) {
    var res = '',
        str = '';
    for (var i = 0, len = arr.length; i < len; i += 1) {
        str = arr[i].trim();
        for (var j = 0, lenStr = str.length; j < lenStr; j += 1) {

            if (str[j] === '<') {
                while (str[j] !== '>')
                    j += 1;
            } else
                res = res + str[j];

        }

    }
    console.log(res);
}

function extractText(arr) {
    var res = '',
        str = '';
    for (var i = 0, len = arr.length; i < len; i += 1) {
        str = str + arr[i].trim();
    }
    for (var j = 0, lenStr = str.length; j < lenStr; j += 1) {

        if (str[j] === '<') {
            while (str[j] !== '>')
                j += 1;
        } else
            res = res + str[j];

    }
    console.log(res);
}
//with regex
function extractTextRegex(arr) {
    var res = '',
        str = '',
        regexEsc = /<.*?>/ig;
    for (var i = 0, len = arr.length; i < len; i += 1) {
        res = res + arr[i].replace(regexEsc, '').trim();
    }
    console.log(res);
}
//extractTextRegex(['<html>', '  <head>', '    <title>Sample site</title>', '  </head>', '  <body>', '    <div>text',
//    '      <div>more text</div>', '      and more...', '    </div>', '    in body', '  </body>', '</html>']);


function replaceTags1(params) {
    var str = params[0],
        res = '',
        link = '',
        url = '[URL=',
        len = str.length,
        j = 0;
    for (var i = 0; i < len; i += 1) {
        if (str[i] === '<' && str[i + 1] === 'a') {
            j = i + 9;
            while (str[j] !== '"') {
                link = link + str[j];
                j += 1;
            }
            j += 1;
            i = j;
            res = res + url + link + ']';
            link = '';

        } else if (str[i] === '<' && str[i + 1] === '/' && str[i + 2] === 'a') {
            i += 4;
            res = res + '[/URL]';
        } else
            res = res + str[i];
    }
    console.log(res);

}
//replaceTags(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']);

function replaceTagsRegex(params) {
    var str = params[0],
        regexUrl = /<a href="/g,
        regEnd = /">/g,
        regex = /<\/a>/g;

    str = str.replace(regexUrl, '[URL=');
    str = str.replace(regEnd, ']');
    str = str.replace(regex, '[/URL]');
    console.log(str);

}

function replaceTags(params) {
    var str = params[0],
        res = '',
        newRes = '';

    for (let i = 0, len = str.length; i < len; i += 1) {
        if (str[i] === '<' && str[i + 1] === 'a') {
            while (str[i] !== '>') {
                if (str[i] === '"') {
                    newRes += str[i + 1];
                    i += 2;
                    while (str[i] != '"') {
                        newRes += str[i];
                        i += 1;
                    }
                }
                i += 1;
            }
            i += 1;
            res += '[';
            while (str[i] !== '<' && str[i + 1] !== '/' && str[i + 2] !== 'a') {

                res += str[i];
                i += 1;
            }
            res += ']';
            i += 3;
            res = res + '(' + newRes + ')';
            newRes = '';

        } else
            res += str[i];
    }
    console.log(res);

}
//replaceTagsRegex(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']);