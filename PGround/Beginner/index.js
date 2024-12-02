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
//? second function //
const arcticVolt = require("events");
const arctic = new arcticVolt();
//! register listener for BellRing event //
arctic.on("bellRing", (period, text) => {
  console.log(`We are from Kamcatka! ${period} ${text}`);
});

setTimeout(() => {
  arctic.emit("bellRing", {
    period: "First Period",
    text: "From Siberia",
  });
}, 4000);
