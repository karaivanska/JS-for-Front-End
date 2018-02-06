/*
You will be given input lines holding information about an object in the format “key -&gt; value“. Create a JS object
and save these keys and values in it.
After you’ve processed all the input data, print the JSON version of the object. Use the JSON.stringify(obj)
function.
 */

"use strict";

function stringify(strArr) {
    let obj = {};

    for(let i = 0; i < strArr.length; i++){
        let str = strArr[i].split(/[\s->]+/);

        for (let i = 0; i < str.length; i++){

            if(str[i] === 'name'){
                obj.name = str[i + 1];
            } else if(str[i] === 'surname'){
                obj.surname = str[i + 1];
            } else if(str[i] === 'age'){
                obj.age = Number(str[i + 1]);
            }else if(str[i] === 'grade'){
                obj.grade = str[i + 1];
            }else if(str[i] === 'date'){
                obj.date = str[i + 1];
            }else if(str[i] === 'town'){
                obj.town = str[i + 1];
            }
        }
    }
    console.log(JSON.stringify(obj));
}
stringify(['name -> Angel surname -> Georgiev  age -> 20  grade -> 6.00  date -> 23/05/1995 town -> Sofia']);