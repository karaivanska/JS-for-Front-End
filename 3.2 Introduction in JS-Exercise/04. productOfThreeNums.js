/*
You are given a number X, Y and Z. Create a JS function that finds if X * Y * Z (the product) is negative or positive.
Try to do this WITHOUT multiplying the 3 numbers.
 */

"use strict";

function products(x, y, z) {
    let count = 0;

    if (x  < 0 ) {
        count++;
    }
    if(y < 0){
        count++;
    }
    if(z < 0){
        count++;
    }

    if (count % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

//products(2, 3, -1);
//products(-3, -4, 5);
//products(5, 4, 3);