module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
          },
        ],
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://sns.chat",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
  },
};
