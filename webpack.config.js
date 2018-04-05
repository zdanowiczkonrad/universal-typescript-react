module.exports = function(env) {
   console.log(env);
    const resolvedMode = env === 'prod' ? 'prod' : 'dev';
    const config = `./webpack.config.${resolvedMode}.js`;
    console.log('Building webpack using ' + config);
    return require(config);
  };
  