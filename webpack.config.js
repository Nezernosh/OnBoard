const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/dist/'
    },
    devServer: {
        open: true,
        openPage: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        },
                    }
                ]
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: ['svg-react-loader']
            }
        ]
    }
} 