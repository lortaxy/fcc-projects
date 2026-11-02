const socket = io({ query: { type: 'bar' } });

socket.on('updateOrders', (orders) => {
  const ordersList = document.getElementById('ordersList');
  ordersList.innerHTML = '';
  orders.forEach(order => {
    const div = document.createElement('div');
    div.className = `order ${order.status}`;
    let items = '';
    let total = 0;
    for (const [name, { qty, price }] of Object.entries(order.items)) {
      items += `${qty} ${name} / `;
      total += qty * price;
    }
    items = items.slice(0, -3); // remove last ' / '
    div.innerHTML = `
      <p>Chair ${order.chair}: ${items} / Total €${total} / ${order.payment}</p>
      <button class="deliverBtn" data-id="${order.id}">Mark Delivered</button>
    `;
    ordersList.appendChild(div);
  });

  // Add event listeners
  document.querySelectorAll('.deliverBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      socket.emit('deliverOrder', parseInt(btn.dataset.id));
    });
  });
});

document.getElementById('clearOrders').addEventListener('click', () => {
  const pin = document.getElementById('pin').value;
  socket.emit('clearOrders', pin);
  document.getElementById('pin').value = '';
});