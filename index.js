const open = require("open");
// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || "localhost";
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 1234;

const express = require ("express");
const join = require ("path");

const app = express();

var dir =  "/";
var index = "index.html";

app.use(express.static(__dirname + dir));

// sendFile will go here
app.get("/", function (req, res) {
    res.sendFile(join(dir, index));
});

app.listen(port, host, function () {
    console.log("http://" + host + ":" + dir + index);
    open("http://" + host + ":" + port + "/" + index, { app: "chrome" });
});