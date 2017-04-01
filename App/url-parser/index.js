//处理客户端数据

// url: query + body + method


module.exports = (request) => {

  let {method, url, context} = request;
  method = method.toLowerCase();

  return Promise.resolve({
    then: (resolve, reject) => {

      context.method = method;
      context.query = {}


      if (method === 'post') {
        let data = '';
        request.on('data', (chunk) => {
          data += chunk;
        }).on('end', () => {
          context.body = JSON.parse(data);
          //通知下一个流程
          resolve()
        })
      }else {
        resolve()
      }
    }
  })
}