const path = require('path');
const { name } = require('./package.json');

const pathResolve = pathUrl => path.join(__dirname, pathUrl);

module.exports = {
  reactScriptsVersion: 'react-scripts' /* (default value) */,
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
    },
    configure(webpackConfig) {
      // 配置扩展扩展名
      webpackConfig.resolve.extensions = [...webpackConfig.resolve.extensions, ...['.scss', '.css']];
      // 接入微前端框架qiankun的配置,不接入微前端可以不需要
      webpackConfig.output.library = `${name}-[name]`;
      webpackConfig.output.libraryTarget = 'umd';
      webpackConfig.output.globalObject = 'window';
      return webpackConfig;
    },
  },
  devServer: {//开发者模式下配置
    // 本地服务的端口号
    port: 3000,
    // 本地服务的响应头设置
    headers: {
      // 允许跨域
      'Access-Control-Allow-Origin': '*',
    },
    client: {//关掉Shows a full-screen overlay in the browser when there are compiler errors or warnings
      overlay: false,
    },
    proxy:{
      '/api':{
        target:'http://127.0.0.1:3000',
        changeOrigin:true, //是否跨域
        pathRewrite:{
          '^/api':'' //替换target中请求地址
        }
      }
    }
  },
};