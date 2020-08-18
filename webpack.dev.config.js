const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin')


module.exports = {
  entry: {
    'home': path.resolve(__dirname, 'src/entry-points/home.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    // publicPath: path.resolve(__dirname, 'dist')+"/",
    //chunkFilename: 'js/[id].[chunkhash].js',
  },
  devServer: {
  //   // contentBase: path.join(__dirname, "dist"),
  //   // compress: true,
    host: '0.0.0.0',
    disableHostCheck: true, // To develop from cloud
    port: 9000,
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react',
              {'plugins': ['@babel/plugin-proposal-class-properties']}]
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              fallback: 'file-loader',
              name: "images/[name].[hash].[ext]",
            }
          }
        ]
      }
    ]
  }
}