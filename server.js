const net = require("net")


const server = net.createServer((socket) => {
    socket.name = socket.remoteAddress + ":" + socket.remotePort
    if (socket.readyState === 'open') {
        console.log(`${socket.name}`)
    }

    socket.on('data', (data) => {
        const message = data.toString()
        console.log(messagek)
    })

    socket.on('close', function close() {
        console.log('The socket is already closed.')
    })

    socket.end('Hello')
})

server.listen(9090, 'localhost', () => {
    console.log("The server is listening on localhost:9090")
})
