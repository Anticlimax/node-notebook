

module.exports=(url)=>{
  let apiMap = {
    '/list.action':['吉他','三只松鼠','mongodb'],
    '/user.action':['李杨','男','未婚']
  }

  return Promise.resolve(apiMap[url])
}