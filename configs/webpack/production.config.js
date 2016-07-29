import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import csswring from 'csswring'
import path from 'path'

const webpackConfig = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
          './src/main.js'
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
                NODE_ENV: JSON.stringify('production')
            },
            NODE_ENV: 'production',
            __PROD__: true,
            __DEBUG__: false,
            __DEVELOPMENT__: false,
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
                collapseWhitespace: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
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
    //     includePaths: path.client('styles')
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
