module.exports = {
  devServer: {
    proxy: {
      "^/api/v1": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api/v1": "" }
      }
    }
  }
};
