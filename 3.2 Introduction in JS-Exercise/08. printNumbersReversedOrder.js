/*
You will be given a few numbers as input. You need to print them in reversed order, each on a new line.
 */

"use strict";

function reversed(arr) {
    arr =arr.reverse();
    console.log(arr.join('\n'));
}
//reversed([10, 15, 20]);
//reversed([5, 5.5, 24, 5, -3]);