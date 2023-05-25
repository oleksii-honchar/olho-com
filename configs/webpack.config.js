const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// Short usage reference
// `NODE_ENV` = development | test | production
// `LOG_LEVEL` = error | warn | info | debug
const generateIndexHtml = require("./webpack/libs/generateIndexHtml");
const pkg = require("../package.json");

const moduleCfg = require("./webpack/module.config");
const baseCfg = require("./webpack/base.config");
const devSrvCfg = require("./webpack/dev-server.config");
const prodCfg = require("./webpack/prod.config");
const externalsCfg = require("./webpack/externals.config");

console.log(`[config:webpack] "${pkg.name}" config composition started`);

module.exports = (env, argv) => {
  env = env ? env : {};
  env.BUILD_ANALYZE = env.BUILD_ANALYZE ? env.BUILD_ANALYZE : null;

  console.log(`[config:webpack] "${process.env.NODE_ENV}" mode used...`);

  generateIndexHtml(env);

  const envES2016 = { ...env, TS_TARGET: "es2016" };
  const envES2022 = { ...env, TS_TARGET: "es2022" };

  let configs = [baseCfg(envES2016), baseCfg(envES2022)];
  configs[0] = merge(configs[0], moduleCfg(envES2016));
  configs[1] = merge(configs[1], moduleCfg(envES2022));

  configs[0] = merge(configs[0], externalsCfg);
  configs[1] = merge(configs[1], externalsCfg);

  if (argv.mode === "development") {
    configs[1] = merge(configs[1], devSrvCfg(envES2022));
  }

  if (env.BUILD_ANALYZE === "true") {
    console.log("[config:webpack] bundle analyzer included");

    configs = configs.map((cfg) =>
      merge(cfg, {
        plugins: [new BundleAnalyzerPlugin()],
      }),
    );
  }

  if (process.env.NODE_ENV !== "production") {
    configs = configs.map((cfg) =>
      merge(cfg, {
        devtool: "inline-source-map",
      }),
    );

    console.log("[config:webpack] config composition completed");

    return configs;
  }

  configs = configs.map((cfg) => merge(cfg, prodCfg));

  console.log("[config:webpack] config composition completed");
  return configs;
};
