module.exports = function(env) {
    const config = `./webpack.config.${env}.js`;
    console.log('Building webpack using ' + config);
    return require(config);
  };
  