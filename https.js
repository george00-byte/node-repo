// JavaScript source code

const http = require('http')

const server = http.createServer((req, res) =>
{
    if (req.url === '/')
    {
        res.end('welcome to our home page')
    }  i 

    if (req.url === '/about') {
        res.end('Here is our short history')
    }

    res.end (`
        <h1>OOPs!</h1>
        <p>We cant seem to find the page youare looking for</p>
        <a href="/"> back home </a>`
    )

})


server.listen(500)