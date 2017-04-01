

module.exports = (request) =>{
  let {url,method} = request;
  let apiMap = {
    '/list.action': ['吉他','三只松鼠','mongodb'],
    '/user.action': ['liyang','帅','男']
  }
  //未对method进行过滤
  method = method.toLowerCase()
  if(method === 'get'){
    return Promise.resolve(apiMap[url])
  } else {
    //处理post
    return new Promise((resolve,reject)=>{
      // 原型链 readable stream eventEmitter
      let data = '';
      request.on('data',(chunk)=>{
        data += chunk;
      }).on('end',()=>{
        resolve(JSON.parse(data))
      })
    })


  }
};