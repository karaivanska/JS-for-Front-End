/*
You will be given N – an integer specifying the length of an array. Then you will start receiving an index and a value.
For each received line you must set the value at the given index to the given value.
When you’ve processed all input data, print the array’s elements each on a new line.
 */

"use strict";

function setValues(arr) {
    let length = Number(arr[0]);
    let array = new Array(length).fill(0);

    for (let i = 1; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let index = Number(tokens[0]);
        let value = Number(tokens[2]);
        array[index] = value;
    }

    for (let num of array) {
        console.log(num);
    }
}

//setValues(['5', '0 - 3', '3 - -1', '4 - 2']);
setValues(['2', '0 - 5','0 - 6','0 - 7']);