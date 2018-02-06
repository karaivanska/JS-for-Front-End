/*
You will be given input lines, each holding information about a student: name, age and grade. The data comes in the
following format:
 “{name} -&gt; {age} -&gt; {grade}”
Store the information from the input lines into JS objects.
Print the objects in their order of appearance, in the format:
Name: {name}
Age: {age}
Grade: {grade}
 */

"use strict";

function storingObjects(strArr) {
        let firstName = '';
        let ages = 0;
        let grades = 0;

    for (let str of strArr) {
        str = str.split(' -> ');
        firstName = str[0];
        ages = Number(str[1]);
        grades = Number(str[2]);
    }
    console.log(`Name: ${firstName}`);
    console.log(`Age: ${ages}`);
    console.log(`Grade: ${grades}`);
}
/*storingObjects(['Pesho -> 13 -> 6.00',
               'Ivan -> 12 -> 5.57',
               'Toni -> 13 -> 4.90']);*/