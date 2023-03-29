// const { createProxyMiddleware } = require("http-proxy-middleware");
// const backendIp = "https://sns.chat";

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: backendIp,
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": "/api",
//       },
//     })
//   );
// };
