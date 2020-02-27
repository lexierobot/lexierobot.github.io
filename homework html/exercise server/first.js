const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Hello, World!</h1>')
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//Basic Server
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/'){
//         res.write(`Hello, World!`);
//         res.end();
//     }

//     if (req.url === '/books') {
//         res.write(JSON.stringify(['Harry Potter', 'Pride & Prejudice', 'The Screwtape Letters']));
//         res.end();
//     }
// });


// server.listen(8080);
// console.log('server is on');


