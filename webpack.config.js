const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './'),
    entry: ['babel-polyfill', './index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react', 'stage-2'],
                },
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            app: 'app',
            utils: 'utils',
            components: 'app/components',
        },
        extensions: ['.js', '.jsx'],
        modules: [path.join(__dirname, './'), 'node_modules'],
    },
};
