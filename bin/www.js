const http = require('http')
const PORT = 8000

const serverHandle = require('../app')
const server = http.createServer(serverHandle)

server.listen(PORT)

console.log('Server is running at http://127.0.0.1:8000')