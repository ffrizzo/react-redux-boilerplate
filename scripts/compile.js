require ('babel-register')

const configuration = require('../configs/webpack/production.config.js')
const compiler = require('webpack')(configuration)

compiler.run(function(err, stats){
    const jsonStat = stats.toJson()

    console.log('Webpack compile completed.')
    console.log(stats.toString({
            chunks: false,
            chunkModules: false,
            colors: true
    }))

    if(err){
        console.log('Webpack compiler encoutered a fatal error. ', err)
        process.exit(1)
    }else if(jsonStat.errors.length > 0){
        console.log('Webpack compiler encoutered errors.')
        console.log(jsonStat.errors)
        process.exit(1)
    }else if(jsonStat.warnings.length > 0){
        console.log('Webpack compiler encoutered warnings.')
    }else{
        console.log('No errors or warnings encountered.')
    }
})
