const { fromCallback } = require('bluebird');
const dyson = require('dyson');
const express = require('express');
const http = require('http');
const path = require('path');

const dysonOptions = {
  configDir: path.join(__dirname, '.'),
  port: 8888,
  quiet: true,
};

const app = express();
const configs = dyson.getConfigurations(dysonOptions);
dyson.registerServices(app, dysonOptions, configs);

const server = http.createServer(app);

module.exports.startDyson = () => {
  return fromCallback(cb => server.listen(dysonOptions.port, cb));
};

module.exports.stopDyson = () => {
  return fromCallback(cb => server.close(cb));
};
