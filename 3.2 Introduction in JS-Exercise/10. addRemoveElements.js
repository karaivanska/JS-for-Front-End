/*
You will be given a sequence of commands (pairs of elements separated by a space): command and argument. You
start by an empty array.
 The command “add {number}” appends the number to the array.
 The command “remove {index}” removes the element at the specified index. If the index is nonexistent,
ignore that input line. When an element is deleted, all elements on the right from it, go one position left.
When you process all input data, print the array’s elements each on a separate line.
 */

"use strict";

function addRemove(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentStr = arr[i].split(' ');
        let command = currentStr[0];
        let num = Number(currentStr[1]);

        if(command === 'add'){
            newArr.push(num);
        } else {
            newArr.splice(num, 1);
        }
    }

    console.log(newArr.join('\n'));
}

//addRemove(['add 3', 'add 5', 'add 7']);
//addRemove(['add 3', 'add 5',  'remove 1', 'add 2']);
