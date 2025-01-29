//підключення модулів
let express=require('express');
app-express(); //
let server=require('http').createServer(app);
let io=require('socket.io') (server);


// прослуховування порту 
server.listen(5000);

//відслідкування url адреси та завантаження вмісту файлу html 
app.get('/', function(request, response) {
      response.sendFile(_dirname + '/index.html'); 
    })

// створення масивів для користувачів та підключень 
users=[];
connections=[];

// функція, яка спрацьовує, коли користувач підключається до чату
lo.sockets.on('connection', function(socket) {
     console.log('Підключення');
     connections.push(socket);

socket.on('disconnect', function(data){
    
    connections.splice(connections.indexOf(socket), 1);
    console.log('Відключено');
});

// функція, яка отримує ім'я та повідомлення від користувача 
socket.on('send mess', function(data) {
io.sockets.emit('add mess', {mess: data.mess, name:data.name});
});
});