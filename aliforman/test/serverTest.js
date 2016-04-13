const expect = require('chai').expect;
const net = require('net');
const fs = require('fs');
require(__dirname + '/../server.js');
var currentFileList;

describe('Current file lists:', () => {
  before(() => {
    fs.readdir('./', (err, files) => {
      currentFileList = files.length;
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
  it('Check if files are same as currentFileList ', (done) => {
    after(() => {
      fs.readdir('./', (err, files) => {
        if (err) return 'Error has occurred.';
        console.log(files);
        expect(files.length).to.eql(currentFileList + 1);
      });
    });
    done();
  });
});
