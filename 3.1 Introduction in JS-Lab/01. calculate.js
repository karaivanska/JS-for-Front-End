/*
Write a JavaScript program to print the value of the following expression:
 (30 + 25) + ((35 – 14) * 2)
 */

"use strict";

function calc(a, b) {
    a += 25;
    b = (b - 14) * 2;
    let result = a + b;
    console.log(result);
}

calc(30, 35);
