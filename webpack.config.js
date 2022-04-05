
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js",
    },
    devServer: {
        port: 3010,
    },
    // mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }],
            },
        ]
    },
    "resolve": {
        "alias": {
            "react": "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat",     // Must be below test-utils
            "react/jsx-runtime": "preact/jsx-runtime"
        },
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
