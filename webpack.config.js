const path = require('path');

module.exports = {
    devtool: 'inline-cheap-source-map',
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        'background/background': './background/background.js'
    },
    output: {
        filename: '[name].wp.js',
        path: path.resolve(__dirname, 'extension'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    }

}
