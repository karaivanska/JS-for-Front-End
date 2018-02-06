/*
You will be given input lines (text) holding object data in JSON format. Use the JSON.parse(str) function to
parse the data into JavaScript objects, and then print them as shown in the examples.
 */

"use strict";

function parsing(strArr) {

    for (let str of strArr) {
        let obj = JSON.parse(str);
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.name}`);
        console.log(`Grade: ${objt.name}`);
    }
}
parsing([{"name": "Gosho", "age": 10, "date": "19/06/2005"},
    {"name": "Tosho", "age": 11, "date": "04/04/2005"}]);