const path = require("path")

module.exports =
    {
        entry: {mian: path.join(__dirname, "./src/js/index.js")},
        module: {
            rules: [{
                test: /\.(jpg|png|eot|svg|ttf|woff|woff2|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]_[hash].[ext]',
                            limit: 1024,
                            outputPath: "images/",
                            mimetype: 'image/png'
                        }
                    }
                ]
            }, {
                test: /\.less/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders:2,
                            modules: true

                        }
                    },
                    {loader: 'less-loader'},
                    {
                        loader: "postcss-loader",
                    }]
            }]
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js'
        },

    }

