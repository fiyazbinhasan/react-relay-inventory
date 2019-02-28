module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
