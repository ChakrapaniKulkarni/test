var http = require('http');
var fs = require('fs');

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     // var html = fs.readFileSync(__dirname + '/index.html', 'utf-8');
//     // var msg = 'Chakrapani Kulkarni';
//     //   html = html.replace('{Message}', msg)
//     //res.end(html);
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
// }).listen(1337, '127.0.0.1');

http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // var html = fs.readFileSync(__dirname + '/index.html', 'utf-8');
        // var msg = 'Chakrapani Kulkarni';
        //   html = html.replace('{Message}', msg)
        //res.end(html);
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'text/JSON' });
        var obj = {
            name: "chakrapani",
            age: 25
        }
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(1337, '127.0.0.1');