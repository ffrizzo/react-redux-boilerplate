const karmaConfig = {
    basePath: 'src',
    singleRun: true,
    frameworks: ['mocha'],
    reporters: ['dots'],
    browsers: ['PhantomJS'],
    files: [
        'test/**/*.spec.js'
    ],
    preprocessors: {
        'test/**/*.spec.js': ['webpadck']
    },
    webpack: {
        resolve: {
            extensions: ['', '.js', '.ts'],
            modulesDirectories: ['node_modules', 'src']
        },
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel-loader'
            }]
        }
    },
    webPackMiddleware: {
        stats: {
            color: true,
            chunkModules: false,
            modules: false
        }
    }
}

export default (cfg) => cfg.set(karmaConfig)
