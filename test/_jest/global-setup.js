const { startDyson } = require('../dyson');

module.exports = async () => {
  if (!process.env.INTEGRATION) {
    return startDyson();
  }
};
