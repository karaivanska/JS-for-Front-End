/*
You will be given input lines, each holding two elements separated by a space. The first is the key and the second is
the value.
Your task is to store the value for each key. If a key already exists, you need to replace the old value with the new
one. At the last line of input, you will receive a key.
Print the value corresponding to that key. If there is no such, print “None”.
 */

"use strict";

function workingWithKVP(arr) {
    let dict = {};
    let keyWord = arr.pop();

    for (let str of arr) {
        str = str.split(' ');
        let key = str[0];
        let value = str[1];

        if(!dict.hasOwnProperty(key)){
            dict[key] = value;
        }
        dict[key] = value;
    }

    if(dict.hasOwnProperty(keyWord)){
        console.log(dict[keyWord]);
    } else {
        console.log('None');
    }
}
/*workingWithKVP(['key value',
               'key eulav',
               'test tset',
                'key']);*/
/*workingWithKVP(['3 test',
                '3 test1',
                '4 test2',
                '4 test3',
                '4 test5',
                '4']);*/
workingWithKVP(['3 bla',
                '3 alb',
                '2']);