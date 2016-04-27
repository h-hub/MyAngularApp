var pkg = require('./package.json');
var config = require(pkg.plugin.envConfig);

var EnvConfig = config.GetConfiguration();

module.exports = EnvConfig;