const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let orders = [];
let orderId = 1;

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A user connected');

  // Send current orders to new bar connection
  if (socket.handshake.query.type === 'bar') {
    socket.emit('updateOrders', orders);
  }

  // Handle new order from customer
  socket.on('newOrder', (order) => {
    order.id = orderId++;
    order.status = 'pending';
    orders.push(order);
    io.emit('updateOrders', orders);
  });

  // Handle order delivered
  socket.on('deliverOrder', (id) => {
    const order = orders.find(o => o.id === id);
    if (order) {
      order.status = 'delivered';
      io.emit('updateOrders', orders);
    }
  });

  // Handle clear orders with pin
  socket.on('clearOrders', (pin) => {
    if (pin === '1234') { // Simple pin, can be changed
      orders = [];
      io.emit('updateOrders', orders);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});