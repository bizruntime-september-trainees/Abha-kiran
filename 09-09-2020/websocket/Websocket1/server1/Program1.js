var Websocket = require("ws");
var wss = new Websocket.Server({port : 8082});

wss.on("connection", ws=> {
    console.log(" client is connected");


    ws.on("close", ()=> {
        console.log("Client is disconnected");
    });
});