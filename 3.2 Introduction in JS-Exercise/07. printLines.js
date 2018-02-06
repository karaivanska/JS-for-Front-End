/*
You will be, continuously, given input lines, until you receive the command “Stop”. Print each of those lines at the
moment you read them, until you reach the ending command. Do NOT print the ending command.
 */

"use strict";

function print(arr) {
    let isStop = false;

    for (let i = 0; i < arr.length; i++){
       if(arr[i] === 'Stop'){
           isStop = true;
           return;
       }

       console.log(arr[i]);
    }
}
print([3, 6, 5, 4, 'Stop', 10, 12]);