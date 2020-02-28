//Basic Server Part 1
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write(`Hello, World!`);
        res.end();
    }

    if (req.url === '/books') {
        res.write(JSON.stringify(['Harry Potter', 'Pride & Prejudice', 'The Screwtape Letters']));
        res.end();
    }
});


server.listen(8080);
console.log('server is on');


