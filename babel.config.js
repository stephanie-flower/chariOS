module.exports = {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
  };

babel: async options => ({ ...options, configFile: false })