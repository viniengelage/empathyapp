module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    [
      "module-resolver",
      {
        root: "./src",
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx",
        ],
        alias: {
          screens:"./src/screens",
          components: "./src/components",
          styles: "./src/global/styles",
          assets:"./src/assets",
          services:"./src/services",
          routes:"./src/routes"
        },
      },
    ],
  ],
  }
};


