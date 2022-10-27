const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require('path');
module.exports = {
  entry: {
    index: "./src/script.js",
    hello:"./src/pages/hello.js",
  },
    output: {
        filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "images/[hash][ext]",
      clean:true,
  },
  devServer: {
      static:"./dist"
    },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: ["style-loader","css-loader"
          
        ]
      },
      {
        test:/\.s[ac]ss$/,
        use: ["style-loader","css-loader","sass-loader"
          
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["index"],
      filename:"index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/hello.html",
      chunks: ["hello"],
      filename:"hello.html"
    })
  ]
}