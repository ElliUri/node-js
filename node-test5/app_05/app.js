const http = require("http");
const fs = require('fs')
const PORT = 3500; 

http.createServer(function(req, res) {
    const url = req.url
    console.log(url);
    switch (url) {
        case "/":
            console.log("main page");
            res.write("<h1>Main</h1>");
            res.end();
            break;
        case "/contact":
                  console.log("contact page");
                const data = fs.readFileSync('./public/contact.html', {encoding: "utf8", flag: "r" })
                res.write(data);
                res.end();
                break;
        default: 
        if (url.includes('/images')) {
            console.log('images==');
            // let data = fs.readFileSync('./public'+ url)
            // синхронный код - плохая практика
            fs.readFile('./public'+ url, {}, function(error, data) {
                if (error) {

                }
                console.log('==== get ====');
                res.setHeader("Content-Type", 'image/png')
                res.write(data)
                res.end()
            })
        } else {
            console.log("404");
            res.write("<h1>404</h1>");
            res.end();
        }
    }
    res.end();
}).listen(PORT);