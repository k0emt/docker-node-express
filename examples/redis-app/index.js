const express = require('express');
const redis = require('redis');

const app = express();
// the name 'redis-server' comes from the docker-compose file
// 6379 is the default port and is optionally passed in here
const client = redis.createClient({
	host: 'redis-server',
	port: 6379 
});


// incr is a better than setting to 0! Especially, if multiple servers!

app.get('/', (req, res) => {
  client.incr('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
