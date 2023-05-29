const path = require("path");

console.log("[config:webpack:snippet] DevServer loaded");

const pkg = require("../../package.json");

module.exports = (env) => {
  console.log(`[config:webpack:snippet] Base: processing "${env.TS_TARGET}" config`);

  return {
    devServer: {
      client: {
        logging: "info",
      },
      devMiddleware: {
        writeToDisk: true,
        publicPath: "/assets/",
      },
      port: process.env.SERVE_PORT,
      static: path.join(__dirname, "../../dist"),
    },
  };
};
