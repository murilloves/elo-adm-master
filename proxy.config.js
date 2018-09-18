const proxy = [
  {
    context: "/api",
    target: "https://elo-api.azurewebsites.net/v1",
    pathRewrite: {"^/api" : ""}
  }
];

module.exports = proxy;