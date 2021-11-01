/* ************************************************ */
/* http , req/res , server.listen(), process.exit() */
/* ************************************************ */
/*
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(res);
    process.exit();
});
server.listen(3000);
*/

/* ********************* */
/* understanding request */
/* ********************* */
/*
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
});
server.listen(3000);
*/

/* *********************** */
/* understanding responses */
/* *********************** */

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
        <head> <title> learning Node </title> </head>
        <body> Hey There!! I am learning NODEJS </body>
    </html>
    `);
    res.end();
    // nothing should responded after it ends i.e. res.end()
});
server.listen(3000);