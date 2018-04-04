module.exports = function(env) {
    const resolvedMode = env === 'production' ? 'prod' : 'dev';
    const config = `./webpack.config.${resolvedMode}.js`;
    console.log('Building webpack using ' + config);
    return require(config);
  };
  