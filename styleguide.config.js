const path = require('path');
const glob = require('glob');

const config = require('./webpack.config.dev.js');
const customWrapper = path.join(__dirname, '/src/StyleguidistWrapper.tsx');
console.log(customWrapper);
module.exports = {
  title: 'React Style Guide Example',
  webpackConfig: config,
  components: function () {
    return glob.sync(path.resolve(__dirname, 'src/components/**/*.tsx'))
      .filter(function (module) {
        return /\/[A-Z]\w*\.tsx$/.test(module);
      });
  },
  styleguideComponents: {
    Wrapper: customWrapper
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } }).parse
};
