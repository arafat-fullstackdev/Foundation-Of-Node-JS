const EventEmitter = require("events");

const emitter = new EventEmitter();

// register listener for bellring event
emitter.on("bellRing", (period) => {
  console.log(`We need to go! ${period}`);
});

setTimeout(() => {
  emitter.emit("bellRing", "First");
}, 2000);

setTimeout(() => {
  emitter.emit("bellRing", "Second");
}, 4000);
