// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // ¡Asegúrate de que 'plugins: ["nativewind/babel"]' no esté aquí!
  };
};
