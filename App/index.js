
const fs = require('fs');
const path = require('path')
const staticServer = require('./static-server')

class App {
  constructor() {

  }
  initServer() {
    return (request, response) => {
      let { url } = request; // ===> 解构赋值 let url = request.url
      //fs.readFile文件路径相对启动路径
      //每个请求逻辑 根据url进行代码分发
      const staticPrefix = path.resolve(process.cwd(),'public')

      let body = staticServer(url)
      response.end(body)
    }
  }
}

module.exports = App