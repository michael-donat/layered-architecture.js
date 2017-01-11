const canister = require('canister.js');
const container = canister('./wiring.yml', __dirname).build();

module.exports = container;
