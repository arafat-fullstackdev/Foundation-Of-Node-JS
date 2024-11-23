const EventEmitter = require("events");

const emitter = new EventEmitter();

// register listener for bellring event
emitter.on("bellRing", (period, text) => {
  console.log(`We need to go! ${period} ${text}`);
});

setTimeout(() => {
  emitter.emit("bellRing", {
    period: "First Period",
    text: "From Node Js",
  });
}, 2000);

setTimeout(() => {
  emitter.emit("bellRing", "Second");
}, 4000);
