const { stopDyson } = require('../dyson');

module.exports = async () => {
  if (!process.env.INTEGRATION) {
    return stopDyson();
  }
};
