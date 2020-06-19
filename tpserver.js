var express = require("express"); 
var app = express();
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/movies", express.static(__dirname + "/movies"));
app.use("/media", express.static(__dirname + "/media"));
app.use("/font-awesome-4.7.0", express.static(__dirname + "/font-awesome-4.7.0"));
app.use("/js", express.static(__dirname + "/js"));



var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
//setting the required variables

users = []; //users array
userConnetions = []; //connections array

server.listen(process.env.PORT || 8080);  // It will run on localhost:(any number)
console.log("TechProg Server Is Up");

app.get("/", function(req, res){
    res.sendFile(__dirname + "/movie.html"); //links to html file CHANGE /index.html to you actually html file
    
});
    
io.sockets.on("connection", function(socket){
    //connection stuff
    userConnetions.push(socket);
    console.log("users connected: %s", userConnetions.length);
    
    // disconnection stuff
    socket.on("disconnect", function(data){
        
        users.splice(users.indexOf(socket.username), 1); //accessing the array users
        
        
    userConnetions.splice(userConnetions.indexOf(socket),1);
    console.log("users disconnected: %s ", userConnetions.length);
    });
    
    //send messages
    socket.on("send user message", function(data){ 
        console.log(data);// shows what the users typed in console
        io.sockets.emit("new user message", {msg: data});
    });
    
    socket.on("send user message2", function(data){ 
        console.log(data);// shows what the users typed in console
        io.sockets.emit("new user message2", {msg: data});
    });
});

