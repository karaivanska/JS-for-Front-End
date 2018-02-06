/*
You will be given input lines, each holding two elements separated by a space: a key and value. You need to store
the given values to the given keys. At the last line of the input you will receive a key.
Your task is to print all the values corresponding to that key. If there are no such, just print “None”.
 */

"use strict";

function multiplyValues(strArr) {
    let dict = {};
    let keyWord = strArr.pop();

    for (let str of strArr) {
        str = str.split(' ');
        let key = str[0];
        let value = str[1];

        if (!dict.hasOwnProperty(key)) {
            dict[key] = value + '\n';
        } else {
            dict[key] += value;
        }
    }

    if (dict.hasOwnProperty(keyWord)) {
        console.log(dict[keyWord]);
    } else {
        console.log('None');
    }
}

multiplyValues(['key value',
    'key eulav',
    'test tset',
    'key']);