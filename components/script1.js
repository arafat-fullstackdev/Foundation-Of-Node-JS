const EventEmitter = require('events');
const emitter = new EventEmitter();

//register Listener for bellRing event 
emitter.on('bellRing', ()=>{
    console.log('We need to go!');
});

emitter.emit('bellRing');