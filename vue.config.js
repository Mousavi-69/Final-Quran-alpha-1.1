module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/sass/_variables.scss";`
      }
    }
  }
};