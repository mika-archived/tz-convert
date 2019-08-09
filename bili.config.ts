import { Config } from "bili";

const config: Config = {
  input: "src/index.ts",
  output: {
    format: ["cjs", "esm", "umd-min"],
    moduleName: "TzConvert"
  },
  plugins: {
    typescript2: {
      cacheRoot: "./.cache"
    }
  }
};

export default config;
