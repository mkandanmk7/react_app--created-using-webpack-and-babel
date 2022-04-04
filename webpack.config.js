
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
}


// const webpack = require("webpack");
// const react = new webpack.ProvidePlugin({
//     React: "react",
// });
// module.exports = {
//     entry: "./src/index.js",
//     output: {
//         path: __dirname,
//         filename: "./dist/bundle.js",

//     },
//     mode: 'development',
//     module: {
//         rules: [
//             {
//                 test: /.js$/,
//                 exclude: /node_modules/,
//                 loader: "babel-loader",
//                 options: {
//                     presets: ["@babel/preset-env", "@babel/preset-react"],
//                     plugins: [
//                         "@babel/plugin-transform-runtime",
//                         "transform-class-properties",
//                     ],
//                 },
//             },
//             {
//                 test: /\.css$/,
//                 use: [{ loader: "style-loader" }, { loader: "css-loader" }],
//             },
//         ],
//     },
//     plugins: [react],
// };
