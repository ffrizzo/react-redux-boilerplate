import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import csswring from 'csswring';
import path from 'path';
import { argv } from 'yargs';

const webpackConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      './src/main.js',
      'webpack-hot-middleware/client?path=/__webpack_hmr'
    ],
    vendor: [
      'history',
      'axios',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
      'redux-form',
    ]
  },

  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../../dist/'),
    publicPath: '/',
  },

  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
     names: ['vendor'],
     minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
      NODE_ENV: 'development',
      __DEBUG__: argv.debug,
      __DEVELOPMENT__: true,
      __BASENAME__: JSON.stringify(process.env.BASENAME || '')
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/,
      options: {
        context: __dirname,
        postcss: [
          csswring({
            sourcemap: true,
            autoprefixer: {
              add: true,
              remove: true,
              browsers: ['last 2 versions']
            },
            removeAllComments: true
          })
        ]
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        colapseWhitespace: true
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules', 'src']
  },

  module: {
    rules: [
      { test: /\.js$/, enforce: 'pre', loader: 'eslint-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'] },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=10240' },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file-loader" },
      { test: /\.eot$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "file-loader" }
    ]
  },
}

export default webpackConfig;
