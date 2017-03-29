const fs = require('fs');
const path = require('path')
const staticServer = require('./static-server')
const apiServer = require('./api')

class App {
  constructor() {

  }
  initServer() {
    return (request, response) => {
      let {
        url
      } = request; // ===> 解构赋值 let url = request.url
      //fs.readFile文件路径相对启动路径
      //每个请求逻辑 根据url进行代码分发
      const staticPrefix = path.resolve(process.cwd(), 'public')
      //将所有以action结尾的url认定为ajax请求
      //DRY
      let body = '';
      let headers = {};
      if (url.match('action')) {
        apiServer(url).then(val => {
          body = JSON.stringify(apiServer(val));
          headers = {
            'Content-Type': 'application/json'
          }
          let finalHeaders = Object.assign(headers, {
            'X-powered-by': 'Node.js'
          })
          response.writeHead(200, 'reolve ok', finalHeaders)
          response.end(body)
        })
      } else {
        staticServer(url).then((body) => {
          let finalHeaders = Object.assign(headers, {
            'X-powered-by': 'Node.js'
          })
          response.writeHead(200, 'reolve ok', finalHeaders)
          response.end(body)
        })
      }
    }
  }
}

module.exports = App