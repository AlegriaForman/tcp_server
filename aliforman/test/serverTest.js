const expect = require('chai').expect;
const net = require('net');
const fs = require('fs');
require(__dirname + '/../server.js');

describe('Current file lists:', () => {
  before(() => {
    fs.readdir('./', (err, files) => {
      if (err) return 'Error has occurred.';
      console.log(files);
    });
  });
  it('Testing TCP server connection', (done) => {
    var server = net.connect({ port: 3000 }, () => {
      server.write('This is a server connection test.');
      server.end();
      done();
    });
  });
  it('Check if files param are same as file list', (done) => {
    fs.readdir('./', (err, files) => {
      if (err) return 'Error has occurred.';
      var fileList = files.length;
      expect(files === fileList + 1).to.eql(true);
    });
    done();
  });
});
