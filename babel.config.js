module.exports = function(api) {
  api.cache(true);
  return {
    'presets': ['babel-preset-expo'],
    'plugins': [
      [
        'module-resolver',
        {
          'root': ['./src'],
          'alias': {
            '_assets': './src/assets',
            '_screens': './src/screens',
            '_navigations': './src/navigations',
            '_scenes': './src/scenes',
            '_apis': './src/apis',
            '_store': './src/store',
            '_styles': './src/styles',
            '_utils': './src/utils',
          },
        },
      ],
    ],
  };
};
