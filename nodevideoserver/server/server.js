const http = require('http');
// import http from 'http';

const app = require('./app');
// import app from './app';
const config = require('./configs/default');

const port = config.port;

const server = http.createServer(app);
server.listen(port);

console.log('server is running on: localhost:' + port);