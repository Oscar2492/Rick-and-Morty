const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            hash: true,
        }),
        new MiniCSSExtractPlugin(),
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            loader: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
        }, ],
    },
};