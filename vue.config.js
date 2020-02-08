module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath:
    process.env.NODE_ENV === "production" ? "saijo-shota-biz/pokedex/" : "/",
  outputDir: "docs"
};
