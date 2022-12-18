var events = require("events");
var eventMitter = events.EventEmitter;
var emitter = new eventMitter();


emitter.on("yeniOlay", function (userName) {
    console.log("yeniOlay" + userName + "için tetiklendi");
});

emitter.on("yeniOlay", function (userName) {
    console.log("yeniOlay" + userName + "için tetiklendi");
});

emitter.listeners("yeniOlay").forEach(function (dinleyiciFonksyionu) {
    userName = "Emre";
    dinleyiciFonksyionu(userName);
});

