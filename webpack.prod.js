var webpack = require('webpack');

module.exports = {
  // This is where it all kicks off
  entry: './src/app.js',
  // Create the output in the built folder and name it app.dev.js
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    })
  ],
  module: {
    loaders: [{
      // Look for all js files run through babel but ignore node_modules as they should already be transformed also cache files
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      // runs css modules on all files in components and then runs it through postcss
      // This [name]_[local]_[hash:base64:5] has to be the same in index.js
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]&importLoaders=1&minimize!postcss-loader')
    }]
  }
}
