const http = require('http');
var fs = require('fs');
var Instagram = require('instagram-web-api');
const hostname = '127.0.0.1';
var index = fs.readFileSync('index.html');
const port = 3000;
const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(index);
});
server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});


const { username, password } = process.env

const client = new Instagram({ username:'', password:'' })

;(async () => {
  await client.login()
  const profile = await client.getProfile()

  console.log(profile)
})()