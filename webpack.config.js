var path = require('path');

var webpack = require('webpack');

module.exports = {
  resolve: {
    root: path.resolve('.'),
    extensions: ['', '.js']
  },
  entry: path.resolve('./app/client.js'),
  output: {
    path: path.resolve('./build/js'),
    publicPath: '/public/js/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  stats: {
    colors: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BROWSER: JSON.stringify(true)
      }
    })
  ],
  devtool: 'source-map',
  watch: true,
  keepalive: true
};
