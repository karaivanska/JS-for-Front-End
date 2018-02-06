/*
You are given a number N. Create a JS function that loops through all the numbers from N to 1 and prints them. N
will always be positive.
 */

"use strict";

function printNums(n) {
    for (let i = n; i >= 1; i--){
        console.log(i);
    }
}
//printNums(5);