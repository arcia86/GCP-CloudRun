// server.js
const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Word  Version 2 demo TVUN!!')
  })
  .listen(PORT, () => console.log('Listening on', PORT))