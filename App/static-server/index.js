//静态资源服务器

const path = require('path')
const fs = require('fs')

let getPath = (url) => {
  return path.resolve(process.cwd(), 'public', `.${url}`)
}

let map = {
  '/':'/index.html',
  '/about':'/about.html',
  '/list':'/list.html'
}


let staticFunc = (url) => {

  url = map[url] || url
  
  let _path = getPath(url)
  let body = '';
  try {
    body = fs.readFileSync(_path)
  } catch (error) {
    body = data = `NOT FOUND${error.stack}`
  }
  return body;
}

module.exports = staticFunc