const event = require("events");
const eventEmitter = new event.EventEmitter();

// const myEventHandler = function(){
//     console.log("Thanks for subscribing College Wallah")
// }

eventEmitter.on("subscribe",myEventHandler);

eventEmitter.emit("subscribe");




// ------- OUTPUT (error) -------
// eventEmitter.on("subscribe",myEventHandler);
//                             ^
// ReferenceError: myEventHandler is not defined
//     at Object.<anonymous> (E:\PWSkills\NodeJS\week 26\9\index.js:8:29)
//     at Module._compile (node:internal/modules/cjs/loader:1241:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
//     at Module.load (node:internal/modules/cjs/loader:1091:32)
//     at Module._load (node:internal/modules/cjs/loader:938:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47