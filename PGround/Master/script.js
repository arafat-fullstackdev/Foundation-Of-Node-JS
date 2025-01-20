const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('belling', ()=>{
console.log(`We need to go !`);
});
emitter.emit('belling');