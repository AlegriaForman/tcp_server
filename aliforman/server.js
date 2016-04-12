const net = require('net');
const fs = require('fs');
const moment = require('moment');
const genId = require('gen-id')('Annnnn');
const orderId = genId.generate();
const port = 3000;
const current = moment();

net.createServer((socket) => {
  socket.on('data', (data) => {
    var timeanddateStamp = current.format('MM-DD-YYYY HH:mm:ss');
    fs.writeFile('TCP Request ' + orderId + ' ' + timeanddateStamp, (err, data) => {
      if (err) return 'Error.';
    });
  });

  socket.end();
}).listen(port);

console.log('Server ready on ' + port + '!');

module.exports = exports;
