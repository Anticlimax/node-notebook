//核心逻辑入口

const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
const apiServer = require('./api');
const urlParser = require('./url-parser')

class App {
  constructor() {

  }

  initServer() {
    return (request, response) => {

      request.context = {
        body:'',
        query:{},
        method:'get'
      }

      apiServer(request).then(val=>{
        if(!val){
          //Promise
          return staticServer(request)
        } else {
          return val
        }
      }).then(val=>{
        //数组
        let base = {'X-powered-by': 'Node.js'};
        let body = '';
        if( val instanceof Buffer){
          body = val
        } else {
          body = JSON.stringify(val);
          let finalHeader = Object.assign(
            base,
            {'Content-Type': 'application/json'}
          )
          response.writeHead(200, 'resolve ok', finalHeader);

        }
        response.end(body);
      })
    }
  }
}


module.exports = App;