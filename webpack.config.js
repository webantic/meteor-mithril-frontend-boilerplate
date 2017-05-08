var path = require('path')
var webpack = require('webpack')
var ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
var ManifestPlugin = require('webpack-manifest-plugin')
var WebpackChunkHash = require('webpack-chunk-hash')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
var AppCachePlugin = require('appcache-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function (env) {
  return {
    entry: {
      main: './app/index.js'
    },
    output: {
      filename: env && env.production ? '[name].[hash].js' : '[name].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    devtool: env && env.production ? false : '#eval-source-map',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractCssChunks.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader' },
              { loader: 'sass-loader' },
              { loader: 'import-glob' }
            ]
          })
        },
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            plugins: ['transform-runtime', 'syntax-dynamic-import', 'transform-regenerator', 'transform-async-to-generator', ["transform-react-jsx", {"pragma": "m"}]],
            presets: [['es2015', {modules: false}], 'stage-0']
          }
        }
      ]
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new ExtractCssChunks,
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest'],
        minChunks: Infinity
      }),
      new webpack.HashedModuleIdsPlugin(),
      new WebpackChunkHash(),
      new HtmlWebpackPlugin({
        template: './app/index.ejs'
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async'
      }),
      new AppCachePlugin({
        cache: [],
        network: null,
        fallback: [],
        settings: ['prefer-online'],
        exclude: [],
        output: 'app.manifest'
      }),
      new CopyWebpackPlugin([
        { from: './app/static' }
      ])
    ]
  }
}
