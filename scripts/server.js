require('babel-register');

const server = require('../server/main');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

server.listen(port, host, function(){
  console.log('Server listening on ==> ' + host + ":" + port);
});
