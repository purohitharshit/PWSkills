const event = require("events");
const eventEmitter = new event.EventEmitter();

const myEventHandler = function(){
    console.log("Thanks for subscribing College Wallah")
}

eventEmitter.on("subscribe",myEventHandler);

eventEmitter.emit("subscribe");

//  ------- OUTPUT --------
// Thanks for subscribing College Wallah