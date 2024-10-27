const EventEmitter = require('events');
const emitter = new EventEmitter();

//register Listener for bellRing event 
emitter.on('bellRing', ({period, text})=>{
    console.log(`We need to go! ${period} ${text}`);
});

setTimeout(() => {
    emitter.emit('bellRing', {
        period: 'first',
        text: 'period ended',  
    });
},4000);