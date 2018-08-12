module.exports = {
    entry: './example/index',
    output: {
        filename: './example/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-3']
                }
            },
        ]
    }
};
