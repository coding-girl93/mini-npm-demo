
const TerserPlugin = require('terser-webpack-plugin')

module.exports ={
  entry:{
    'add':'./src/index.js',
    'add.min':'./src/index.js'
  },
  output:{
    filename:'[name].js',
    library:'add', // 库名字
    libraryExport:'default', // 
    libraryTarget:'umd' // 通用打包模式
  },
  mode:'none',
  optimization:{
    minimize:true,
    minimizer:[
      new TerserPlugin({
        include:/\.min\.js$/
      })
    ]
  }
}