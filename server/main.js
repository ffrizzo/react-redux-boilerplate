import express from 'express';
import path from 'path';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import WebpackDevMiddlerware from 'webpack-dev-middleware';
import WebPackHotMiddlerware from 'webpack-hot-middleware';
import webpackConfig from '../configs/webpack/development.config';

const app = express();
const compiler = webpack(webpackConfig);
const publicPath = webpackConfig.output.publicPath;

app.use(historyApiFallback({
  verbose: false
}));

app.use(WebpackDevMiddlerware(compiler, {
  publicPath,
  noInfo: true,
  hot: true,
  logLevel: 'error',
}));

app.use(WebPackHotMiddlerware(compiler));

app.use(express.static(path.join(__dirname, '/')));

export default app;
