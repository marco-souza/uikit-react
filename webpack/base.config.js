/* global __dirname */
const
    appConfig           = require("common-config"),
    path                = require("path"),
    CleanWebpackPlugin  = require("clean-webpack-plugin"),
    WriteFilePlugin     = require("write-file-webpack-plugin"),
    HtmlWebpackPlugin   = require("html-webpack-plugin"),
    FlowtypePlugin      = require("flowtype-loader/plugin")

module.exports = {
    entry: {
        main: path.resolve(__dirname, appConfig.src.main),
        vendor: [
            "babel-polyfill",
            "react",
            "react-dom",
            "react-redux",
            "react-router",
        ]
        // vendor: []
    },
    output: {
        path: path.resolve( __dirname, appConfig.src.dest ),
        // publicPath: "/assets/",
        chunkFilename: "[chunkhash].js",
        filename: "[name].js"
    },
    
    module: {
        rules: [

            // CSS
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            // Stylus
            {
                test: /\.styl$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader", options: {
                            modules: true,
                            sourceMap: true,
                            camelCase: true,
                            localIdentName: "[hash:base64:5]"
                        }
                    },
                    {
                        loader: "stylus-loader", options: {
                            preferPathResolver: "webpack"
                        }
                    }
                ]
            },

            // Fonts
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                use: [
                    {
                        loader: "url-loader", options: {
                            name: "/assets/fonts/[name].[ext]"
                        }
                    }
                ]
            },

            // JS & JSX
            {
                test: /.jsx?$/,
                enforce: "pre",
                exclude: /node_modules|config/,
                use: [{ loader: "flowtype-loader" }]
            },
            {
                test: /.jsx?$/,
                enforce: "pre",
                exclude: /node_modules|config/,
                use: [
                    {
                        loader: "eslint-loader", options: {
                            emitWarning: true
                        }
                    }
                ]
            },
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader", options: {
                            presets: ["latest", "react", "flow"],
                            plugins: [
                                "autobind-class-methods",
                                "transform-class-properties",
                                "transform-export-extensions",
                                "add-module-exports"
                            ]
                        }
                    }
                ]
            },

            // Images
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: "url-loader", options: {
                            limit: 8192,
                            //name: "images/[sha512:hash:base64:7].[ext]",
                            name: "images/[name].[ext]",
                            publicPath: "/assets/"
                        }
                    }
                ]
            }
        ]
    },

    // Extensions to resolve
    resolve: {
        modules: [
            path.resolve(__dirname, ".."),
            path.resolve(__dirname, "../src/app"),
            path.resolve(__dirname, "../node_modules")
        ],
        extensions: [
            ".js", ".jsx", ".json",     // JS
            ".png", ".jpg", ".jpeg",    // Images
            ".styl", ".css",            // CSS
        ]
    },

    // Plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: appConfig.info.title
        }),
        new FlowtypePlugin(),
        new CleanWebpackPlugin(appConfig.src.dest),
        new WriteFilePlugin(),
    ],
}