const express = require("express");
const redis = require("redis");
var os = require("os");
const { exit } = require("process");

var networkInterfaces = os.networkInterfaces();
const serverIp = networkInterfaces.eth0[0].address;

const app = express();
// the name 'redis-server' comes from the docker-compose file
// 6379 is the default port and is optionally passed in here
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});

// incr is a better than setting to 0!
// also, this puts the responsibility of the increment on the redis server
// especially important with multiple servers!

app.get("/", (req, res) => {
  client.incr(`${req.ip}`, (err, clientVisits) =>
    client.incr(`${serverIp}`, (err, serverVisits) =>
      client.incr("sitevisits", (err, visits) => {
        res.send(pageContent(req.ip, clientVisits, visits, serverVisits));
      })
    )
  );
});

var server = app.listen(8081, () => {
  console.log(`This server ${server.address().address} listening on port 8081`);
});
function pageContent(clientIp, clientVisits, visits, serverVisits) {
  return `<html><body>
  <table>
  <tr><td>Site visits </td><td> ${visits}</td></tr>
  <tr><td>Server ${serverIp} visits </td><td>${serverVisits}</td></tr>
  <tr><td>Client ${clientIp} visits </td><td>${clientVisits}</td></tr>
  <table>
  </body></html>`;
}
