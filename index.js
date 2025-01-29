// Підключення модулів
let express = require('express');
let app = express(); // ❌ Було: app-express(); ✅ Стало: app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

// Прослуховування порту
server.listen(5000);

// Відслідковування URL-адреси та завантаження файлу index.html
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html'); // ❌ Було: _dirname ✅ Стало: __dirname
});

// Масиви для користувачів та підключень
let users = [];
let connections = [];

// Функція, яка виконується при підключенні користувача
io.sockets.on('connection', function(socket) { // ❌ Було: lo.sockets ✅ Стало: io.sockets
    console.log('Користувач підключився');
    connections.push(socket);

    // Відключення користувача
    socket.on('disconnect', function() {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Користувач відключився');
    });

    // Отримання повідомлення від користувача
    socket.on('send mess', function(data) {
        io.sockets.emit('add mess', { mess: data.mess, name: data.name });
    });
});