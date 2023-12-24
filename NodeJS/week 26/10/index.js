const event = require("events");
const eventEmitter = new event.EventEmitter();

const currentMaxListeners = eventEmitter.getMaxListeners();
console.log(`The defualt maximum number of event listeners are: ${currentMaxListeners}`);


eventEmitter.setMaxListeners(5);


const updatedMaxListeners = eventEmitter.getMaxListeners();
console.log(`The updated maximum number of event listeners are: ${updatedMaxListeners}`);


//-------- OUTPUT -------
// The defualt maximum number of event listeners are: 10
// The updated maximum number of event listeners are: 5