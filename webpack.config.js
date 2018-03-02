module.exports = {
  entry: './example/index',
  output: {
    filename: './example/bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2', 'stage-3']
        }
      },
    ]
  }
};
