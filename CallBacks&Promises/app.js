// async await >> promise chains >> callback hell

/*
Synchronous: Synchronous means the code runs in a particular sequence of instructions given in the program. 
Each instruction waits for the previous instruction to complate its execution.

Asynchronous: Due to synchronous programming, sometimes imp instruction get blocked due to some previous instruction, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

Callback: A callback is a function passed as an argument to another function.

Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom)
This style of programming become difficult to understand & manage.

Promises: Promise is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell.

let promiss = new Promiss((resolve, reject) => {...})
A JavaScript Promise object can be:
                            --pending: the result is undefined
                            --fulfilled: the result is a value(fulfilled)  resolve(result)
                            --rejected: the result is an error object      reject(error)

** Promise has state(pending, fulfilled) & some result (result for resolve & error for reject).
** resolve & reject are callbacks provided by JS
*/


//######################################################################################
/*
console.log("one");

setTimeout( () => { 
    console.log("hello");
}, 4000); //timeout

const hello =  () => {
    console.log("hello arrow function");
}
setTimeout(hello, 2000);

console.log("two");


///Callback
const sum = (a, b) =>  {
    console.log(a+b);
}
const calculator = (a, b, sumCallback) => {
    sumCallback(a, b);
}

calculator(1, 2, sum);
*/

//##############################################################################
/*
function getData(dataId) {
    //2s
    setTimeout(() => {
        console.log("data", dataId);
    }, 2000);
}

getData(123);
getData(234);
getData(345);
*/



//##############################################################################
/*
function getData(dataId, getNextData) {
    //2s
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData)
            getNextData();
    }, 2000);
}


//Callback hell
getData(1, () => {
    console.log("getting data2...");
    getData(2, () => {
        console.log("getting data3...");
        getData(3, () => {
            console.log("getting data4...");
            getData(4);
        });
    });
});
*/

//##############################################################################
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promiss");
//     reject("some error occurred");
// });


function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 5000);
    });
}