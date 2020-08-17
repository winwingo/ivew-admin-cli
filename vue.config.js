// module.exports = {
//   devServer: {
//     disableHostCheck: true
//   }
// }

// console.log("环境", process.env.NODE_ENV);
module.exports = {
  // devServer: {
  //   host: "haitun.qa.xianchengkeji.cn",
  //   port: 6046,
  //   disableHostCheck: true
  // },
  devServer: {
    disableHostCheck: true
  },
  // 打包时不生成.map文件 避免看到源码
  productionSourceMap: false,
  // 部署优化
  configureWebpack: {
    output:{
      filename: `[name].js?v=`+ new Date().getTime(),
      chunkFilename: `[name].js?v=`+ new Date().getTime(),
    }
    // devServer: {
    //   port: 6046
    // },
    // plugins: [
    //   new CompressionPlugin({
    //     test: /\.js$|\.html$|\.css/, // 匹配文件
    //     threshold: 10240 // 对超过10k文件压缩
    //   })
    // ]
  }
};
