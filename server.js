var express = require("express")
var MongoClient = require('mongodb').MongoClient;
var path = require("path")
const bodyParser = require('body-parser');
const http = require('http');
const { Server } = require("socket.io");

var app = express()

var PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server(server);
var url = "mongodb://localhost:27017/test";

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

//wysyłanie pliku
app.get("/", function (req, res) {

    res.sendFile("/public/index.html")
})

//tu wysyłanie danych z mongo
app.post("/data", function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test")
        dbo.collection("TestCol").findOne({ level: parseInt(req.body.level) }, function (err, result) {
            res.send(result.content)
            db.close();
        })
    });
})

//obsługa websocketów - biblioteka socket.io
var rooms = [[]]
io.on('connection', (socket) => {
    console.log("connection")
    //tutaj jest przydzielanie do roomów
    //każdy pokój to 2 graczy
    socket.on("login", (arg) => {
        console.log("login")
        switch (rooms[rooms.length - 1].length) {
            case 0:
                {
                    rooms[rooms.length - 1][0] = socket.id
                    break;
                }
            case 1:
                {
                    rooms[rooms.length - 1][1] = socket.id
                    break;
                }
            case 2:
                {
                    rooms.push([])
                    rooms[rooms.length - 1][0] = socket.id
                    break;
                }
        }
        socket.join(rooms.length - 1)
        io.to(rooms.length - 1).emit("joined", JSON.stringify({ id: socket.id, room: rooms.length - 1, playerType: rooms[rooms.length - 1].length }))
    })
    socket.on("updateMovement", (arg) => {
        for (var i = 0; i < rooms.length; i++) {
            if (rooms[i][0] == socket.id || rooms[i][1] == socket.id) {
                io.to(i).emit("updateMovement", arg)
                break
            }
        }
    })
});


server.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
