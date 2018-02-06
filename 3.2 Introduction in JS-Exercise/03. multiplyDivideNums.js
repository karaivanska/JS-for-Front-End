/*
You are given a number N and a number X. Create a JS function that:
 Multiplies N * X if X is greater than or equal to N
 Divides N / X if N is greater than X
The input comes as array of strings.
 */

"use strict";

function multiplyAndDivide(n, x) {
   if(x >= n){
      return n * x;
   } else {
       return n/x;
   }
}
console.log(multiplyAndDivide(3, 2));