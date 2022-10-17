// server.js
/*
const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Welcome !!')
  })
  .listen(PORT, () => console.log('Listening on', PORT))


const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  // We will add the client region to the http header via the load balancer, if running locally it will not be available
  message = (req.header('X-Client-Geo-Location') != null ? 'You are viewing from ' + req.header('X-Client-Geo-Location') : '')
  res.render('index', { title: 'Geofenced Service', message: 'Welcome! ' + message })
})
  
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`geofenceservice: listening on port ${PORT}`);
});
*/
const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Welcome !!')
  })
  .listen(PORT, () => console.log('Listening on', PORT))