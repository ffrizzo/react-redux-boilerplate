import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import csswring from 'csswring'
import path from 'path'
import { argv } from 'yargs'

const webpackConfig = {
    devtool: 'cheap-module-eval-source-map',
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

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            },
            NODE_ENV: 'development',
            __DEBUG__: argv.debug,
            __DEVELOPMENT__: true,
            __BASENAME__: JSON.stringify(process.env.BASENAME || '')
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
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
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: ['node_modules', 'src']
    },

    module: {
        loaders:[
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass', 'postcss'] },
            { test: /\.(png|jpg)$/, loader: 'url?limit=10240' },
            { test: /\.(woff|woff2)$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/, loader: "file" },
            { test: /\.eot$/, loader: "file" },
            { test: /\.svg$/, loader: "file" }
        ]
    },

    // sassLoader: {
    //     includePaths: paths.client('styles')
    // },
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

export default webpackConfig
