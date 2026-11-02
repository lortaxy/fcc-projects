const socket = io();

const drinks = [
  { name: 'Beer', price: 3 },
  { name: 'Wine', price: 4 },
  { name: 'Cocktail', price: 5 },
  { name: 'Vodka Red Bull', price: 6 },
  { name: 'Whiskey', price: 7 },
  { name: 'Rum', price: 5 },
  { name: 'Gin Tonic', price: 6 },
  { name: 'Margarita', price: 7 },
  { name: 'Mojito', price: 6 },
  { name: 'Piña Colada', price: 8 },
  { name: 'Tequila Shot', price: 4 },
  { name: 'Sangria', price: 5 },
  { name: 'Cider', price: 3 },
  { name: 'Lemonade', price: 2 },
  { name: 'Soda', price: 2 },
  { name: 'Water', price: 1 },
  { name: 'Coffee', price: 3 },
  { name: 'Tea', price: 2 },
  { name: 'Juice', price: 3 },
  { name: 'Smoothie', price: 4 }
];

let currentOrder = {};

document.addEventListener('DOMContentLoaded', () => {
  const drinksList = document.getElementById('drinksList');
  drinks.forEach((drink, index) => {
    const div = document.createElement('div');
    div.className = 'drink';
    div.innerHTML = `
      <input type="checkbox" id="drink${index}" data-name="${drink.name}" data-price="${drink.price}">
      <label for="drink${index}">${drink.name} - €${drink.price}</label>
      <input type="number" min="0" value="0" class="quantity" data-name="${drink.name}">
    `;
    drinksList.appendChild(div);
  });

  document.getElementById('addToOrder').addEventListener('click', addToOrder);
  document.getElementById('orderForm').addEventListener('submit', submitOrder);
});

function addToOrder() {
  currentOrder = {};
  let total = 0;
  document.querySelectorAll('.drink').forEach(div => {
    const checkbox = div.querySelector('input[type="checkbox"]');
    const quantityInput = div.querySelector('.quantity');
    if (checkbox.checked && parseInt(quantityInput.value) > 0) {
      const name = checkbox.dataset.name;
      const price = parseFloat(checkbox.dataset.price);
      const qty = parseInt(quantityInput.value);
      currentOrder[name] = { qty, price };
      total += qty * price;
    }
  });
  updateOrderSummary(total);
}

function updateOrderSummary(total) {
  const summary = document.getElementById('orderSummary');
  summary.innerHTML = '<h3>Order Summary</h3>';
  for (const [name, { qty, price }] of Object.entries(currentOrder)) {
    summary.innerHTML += `<p>${name}: ${qty} x €${price} = €${qty * price}</p>`;
  }
  summary.innerHTML += `<p><strong>Total: €${total}</strong></p>`;
}

function submitOrder(e) {
  e.preventDefault();
  const chair = document.getElementById('chair').value;
  const payment = document.getElementById('payment').value;
  if (Object.keys(currentOrder).length === 0) {
    alert('Please add items to your order.');
    return;
  }
  const order = {
    chair: parseInt(chair),
    items: currentOrder,
    payment,
    timestamp: new Date().toISOString()
  };
  socket.emit('newOrder', order);
  alert('Order submitted!');
  // Reset form
  document.getElementById('orderForm').reset();
  currentOrder = {};
  updateOrderSummary(0);
}