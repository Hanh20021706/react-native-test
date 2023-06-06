module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
 
};

// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
+ plugins: ["nativewind/babel"],
};