module.exports = {
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
  },
};
