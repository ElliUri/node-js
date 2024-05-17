const http = require("http");
// подключаем модуль файловой системы - http - позволяет создать сервер

// request, response 
http.createServer(function(req, res) {
    console.log(req.url);
    console.log(req.method);
    console.log("server work");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write("<h2>Hello world</h2>")
    res.write("<p>Hello</p>")
    res.end( );

}).listen(3500);
// метод создания сервера

