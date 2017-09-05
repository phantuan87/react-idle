module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "ReactIdle",
      externals: {
        react: "React"
      }
    }
  }
}
