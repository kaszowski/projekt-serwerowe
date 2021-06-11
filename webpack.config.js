var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        multicamera: "./src/multicamera.js",
        particles: "./src/particles.js",
        samplescene: "./src/samplescene.js",
    },
    output: {
        filename: '[name].js',
    },
    mode: 'development', // none, development, production
    devServer: {
        port: 8080,
        contentBase: ['./dist', './src'],
        inline: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './multicamera.html',
            title: "multikamera",
            template: './src/public/index.html',
            chunks: ['multicamera'],

        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: './particles.html',
            title: "particles",
            template: './src/public/index.html',
            chunks: ['particles'],

        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: './samplescene.html',
            title: "Sample Scene",
            template: './src/public/index.html',
            chunks: ['samplescene'],

        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(md2)$/i,
                type: 'asset/resource',
            }

        ]
    },
};