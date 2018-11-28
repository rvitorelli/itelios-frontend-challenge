const path = require('path');
const webpack = require('webpack');
module.exports = {
  devtool :  " source-map " ,
  entry: ["@babel/polyfill", "./app/main.js"],
  //Definindo ponto de saída dos arquivos
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'dist/'
  },
  //configurando o servidor local
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333
  },
  resolve: {
    alias: {
        jquery: "jquery/dist/jquery.min.js"
    }
  },
  module: {
    rules: [
      {
        // Exposes jQuery for use outside Webpack build
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ],
    strictThisContextOnImports: true,
  },
  plugins: [
    new webpack.ProvidePlugin({
        'window.jQuery'    : 'jquery',
        'window.$'         : 'jquery',
        'jQuery'           : 'jquery',
        '$'                : 'jquery'
    })
  ]
};