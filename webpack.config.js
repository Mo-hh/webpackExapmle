const resolve = require('path').resolve;
const Htmlwebpackplugin =require('html-webpack-plugin');
const Imageminplugin =require('imagemin-webpack-plugin').default;
const copyWebpackplugin =require('copy-webpack-plugin');
const ImageminJpegoptim =require('imagemin-jpegoptim');
const MiniCssExtractplugin =require('mini-css-extract-plugin');



module.exports = {
  mode: 'development',
  entry: './src/scripts/app.js',
  output: {
    path: resolve(__dirname, 'dist'),
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
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test:/\.s?css?/i,
        use:[
          {
            loader:MiniCssExtractplugin.loader,
            options:{
              publicPath: '/dist'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }

    ]
  },
  plugins: [
    new  Htmlwebpackplugin({
     template:'./src/index.html',
     filename:'index.html'

   }),

new copyWebpackplugin([
  {from:'./src/images',to:'./images'}
]),
new Imageminplugin({

  test:/\.(jpe?g|png|gif|svg)?/i,
  plugins:[
    ImageminJpegoptim({
      size:'60%',

      progressive:true
    })
  ]
}),
new MiniCssExtractplugin({
  filename:'main.css'
})
  ]
}
