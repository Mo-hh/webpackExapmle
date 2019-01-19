const resolve = require('path').resolve;
const Htmlwebpackplugin =require('html-webpack-plugin');
const copyWebpackplugin =require('copy-webpack-plugin');
const MiniCssExtractplugin =require('mini-css-extract-plugin');



module.exports = {
  mode: 'development',
  entry: './src/scripts/app.js',
  output: {
    path: resolve(__dirname, 'dist/scripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?/i,
        exclude: /node_modules/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
      {
        test:/\.s?css?/i,
        use:[
          {
            loader:MiniCssExtractplugin.loader

          },
          'css-loader',
          'sass-loader'
        ]
      },



    ]
  },
  plugins: [
    new  Htmlwebpackplugin({
     template:'./src/index.html',
     filename:'../index.html'

   }),





new MiniCssExtractplugin({
  filename:'../styles/main.css'
}),

// new copyWebpackplugin([
//   {from:'./src/images',to:'../images'}
// ])


  ]


  }
