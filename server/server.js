// zmienne i stałe
var express = require("express")
var path = require("path")
var app = express()
const port = process.env.PORT || 3000

var nextid = 8
var basehtml = [
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mini-Projekt</title>
        <link rel="stylesheet" href="../css/`, `.css">
    </head>
    
    <body>
        <div id="header-one">
            <a href="./">MAIN</a>
            <a href="./admin">ADMIN</a>
            <a href="./logout">LOGOUT</a>
        </div>
        <div id="header-two">
            <a href="./sort">SORT</a>
            <a href="./gender">GENDER</a>
            <a href="./show">SHOW</a>
        </div>
        <div id="main">`, `</div>
        <div id="footer">
            <p>Created by Jakub Hojda 3ID1 2020</p>
        </div>
    </body>
    
    </html>`
] //basehtml[0] + nazwa pliku css + basehtml[1] + zawartość + basehtml[2]

//parsowanie
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

//spis stron
app.get("/", function (req, res) {
    if (isloggedin) {
        res.sendFile(path.join(__dirname + "/static/html/main-logout.html"))
    } else {
        res.sendFile(path.join(__dirname + "/static/html/main.html"))
    }
})

app.get("/register", function (req, res) {
    if (isloggedin) {
        res.send("You're already logged in!\nTo register a new user, you must log out!")
    } else {
        res.sendFile(path.join(__dirname + "/static/html/register.html"))
    }
})
app.post("/register", function (req, res) {
    var login = req.body.login
    var pass = req.body.password
    var age = req.body.age
    var student = req.body.student
    if (student == undefined) {
        student = false
    } else {
        student == true
    }
    var sex = req.body.sex
    var isunique = true
    if (login == "" || pass == "" || sex == undefined) {
        isunique = false
        res.send("Some data is missing! Please enter correct data!")
    }
    if (isunique) {
        for (var i = 0; i < registeredusers.length; i++) {
            if (registeredusers[i].login == login) {
                isunique = false
                break
            }
        }
        if (isunique) {
            registeredusers.push({ id: nextid, login: login, pass: pass, age: age, student: student, sex: sex })
            nextid++
            res.send("User has been registered! You can now login with your new user!")
        } else {
            res.send("This login is already taken! Please choose another one!")
        }
    }
})

app.get("/login", function (req, res) {
    if (isloggedin) {
        res.send("You're already logged in!\nTo login with a different user, you must be logged out!")
    } else {
        res.sendFile(path.join(__dirname + "/static/html/login.html"))
    }
})
app.post("/login", function (req, res) {
    var login = req.body.login
    var pass = req.body.password
    if (login == "" || pass == "") {
        res.send("Some data is missing! Please enter correct data!")
    } else {
        for (var i = 0; i < registeredusers.length; i++) {
            if (login == registeredusers[i].login && pass == registeredusers[i].pass) {
                isloggedin = true
                res.redirect("/")
            }
        }
        if (isloggedin == false) {
            res.send("Login and/or password is incorrect!")
        }
    }
})

app.get("/logout", function (req, res) {
    isloggedin = false
    res.redirect("/")
})

app.get("/admin", function (req, res) {
    if (isloggedin) {
        res.sendFile(path.join(__dirname + "/static/html/admin-access.html"))
    } else {
        res.sendFile(path.join(__dirname + "/static/html/admin-denied.html"))
    }
})

app.get("/show", function (req, res) {
    if (isloggedin) {
        registeredusers.sort(function (a, b) {
            return parseFloat(a.id) - parseFloat(b.id);
        })
        var temp = "<table><tr><th>ID</th><th>LOGIN</th><th>PASSWORD</th><th>WIEK</th><th>STUDENT?</th><th>PŁEĆ</th></tr>"
        for (var i = 0; i < registeredusers.length; i++) {
            temp = temp + "<tr><td>" + registeredusers[i].id + "</td><td>" + registeredusers[i].login + "</td><td>" + registeredusers[i].pass + "</td><td>" + registeredusers[i].age + "</td><td>"
            if (registeredusers[i].student) {
                temp = temp + "<input type=\"checkbox\" checked disabled></td><td>"
            } else {
                temp = temp + "<input type=\"checkbox\" disabled></td><td>"
            }
            if (registeredusers[i].sex == "male") {
                temp = temp + "Mężczyzna</td></tr>"
            } else {
                temp = temp + "Kobieta</td></tr>"
            }
        }
        temp = basehtml[0] + "sort" + basehtml[1] + temp + "</table>" + basehtml[2]
        res.send(temp)
    } else {
        res.sendFile(path.join(__dirname + "/static/html/admin-denied.html"))
    }
})

app.get("/gender", function (req, res) {
    if (isloggedin) {
        registeredusers.sort(function (a, b) {
            return parseFloat(a.id) - parseFloat(b.id);
        })
        var temptable = []
        for (var i = 0; i < registeredusers.length; i++) {
            if (registeredusers[i].sex == "male") {
                temptable.push(registeredusers[i])
            }
        }
        var temp = "<table><tr><th>ID</th><th>PŁEĆ</th></tr>"
        for (var i = 0; i < temptable.length; i++) {
            temp = temp + "<tr><td>" + temptable[i].id + "</td><td>Mężczyzna</td></tr>"
        }
        temp = temp + "</table>"
        temptable = []
        for (var i = 0; i < registeredusers.length; i++) {
            if (registeredusers[i].sex == "female") {
                temptable.push(registeredusers[i])
            }
        }
        temp = temp + "<br><table><tr><th>ID</th><th>PŁEĆ</th></tr>"
        for (var i = 0; i < temptable.length; i++) {
            temp = temp + "<tr><td>" + temptable[i].id + "</td><td>Kobieta</td></tr>"
        }
        temp = basehtml[0] + "sort" + basehtml[1] + temp + "</table>" + basehtml[2]
        res.send(temp)
    } else {
        res.sendFile(path.join(__dirname + "/static/html/admin-denied.html"))
    }
})

app.get("/sort", function (req, res) {
    if (isloggedin) {
        var temp = '<form action="/sort" method="POST" onchange="this.submit()">Malejąco<input type="radio" name="sort" value="down">Rosnąco<input type="radio" name="sort" value="up" checked></form>'
        var temptable = registeredusers
        temptable.sort(function (a, b) {
            return parseFloat(a.age) - parseFloat(b.age);
        })
        var temp = temp + "<table><tr><th>ID</th><th>LOGIN</th><th>PASSWORD</th><th>WIEK</th></tr>"
        for (var i = 0; i < registeredusers.length; i++) {
            temp = temp + "<tr><td>" + registeredusers[i].id + "</td><td>" + registeredusers[i].login + "</td><td>" + registeredusers[i].pass + "</td><td>" + registeredusers[i].age + "</td></tr>"
        }
        temp = temp + "</table>"
        res.send(basehtml[0] + "sort" + basehtml[1] + temp + basehtml[2])
    } else {
        res.sendFile(path.join(__dirname + "/static/html/admin-denied.html"))
    }
})
app.post("/sort", function (req, res) {
    if (isloggedin) {
        var sorttype = req.body.sort
        if (sorttype == "up") {
            var temp = '<form action="/sort" method="POST" onchange="this.submit()">Malejąco<input type="radio" name="sort" value="down">Rosnąco<input type="radio" name="sort" value="up" checked></form>'
            var temptable = registeredusers
            temptable.sort(function (a, b) {
                return parseFloat(a.age) - parseFloat(b.age);
            })
            var temp = temp + "<table><tr><th>ID</th><th>LOGIN</th><th>PASSWORD</th><th>WIEK</th></tr>"
            for (var i = 0; i < registeredusers.length; i++) {
                temp = temp + "<tr><td>" + registeredusers[i].id + "</td><td>" + registeredusers[i].login + "</td><td>" + registeredusers[i].pass + "</td><td>" + registeredusers[i].age + "</td></tr>"
            }
            temp = temp + "</table>"
            res.send(basehtml[0] + "sort" + basehtml[1] + temp + basehtml[2])
        } else {
            var temp = '<form action="/sort" method="POST" onchange="this.submit()">Malejąco<input type="radio" name="sort" value="down" checked>Rosnąco<input type="radio" name="sort" value="up"></form>'
            var temptable = registeredusers
            temptable.sort(function (b, a) {
                return parseFloat(a.age) - parseFloat(b.age);
            })
            var temp = temp + "<table><tr><th>ID</th><th>LOGIN</th><th>PASSWORD</th><th>WIEK</th></tr>"
            for (var i = 0; i < registeredusers.length; i++) {
                temp = temp + "<tr><td>" + registeredusers[i].id + "</td><td>" + registeredusers[i].login + "</td><td>" + registeredusers[i].pass + "</td><td>" + registeredusers[i].age + "</td></tr>"
            }
            temp = temp + "</table>"
            res.send(basehtml[0] + "sort" + basehtml[1] + temp + basehtml[2])
        }
    } else {
        res.sendFile(path.join(__dirname + "/static/html/admin-denied.html"))
    }
})

//stały nasłuch na port
app.use(express.static('static'))
app.listen(port, function () {
    console.log("Serwer został uruchomiony na porcie: " + port)
})