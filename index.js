
const http = require('http')
const App = require('./App')
const PORT = 7010
const server = new App()

http.createServer(server.initServer()).listen(PORT,()=>{
  console.log(`listening on port ${PORT}`)
})