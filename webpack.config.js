const path=require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')
module.exports={
  // entry:'./src/index.js',
  entry:{
    app:'./src/index.js',
    print:'./src/print.js'
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{//配置模块/规则
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options: {
            presets: ['babel-preset-env','babel-preset-react'],
          }
        }
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  },
  plugins:[//插件
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'output management',
      template:'./src/index.html'
    }),

    
  ],
  devtool:'inline-source-map',//提示错误文件
  devServer:{//开发服务器
    "contentBase":'./dist'
  }
}