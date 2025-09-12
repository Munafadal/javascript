// Warehouse lady: fetches the box
function getBoxFromWarehouse(order) {
  return new Promise((resolve) => {
    console.log(`Warehouse lady is fetching: ${order}...`);
    setTimeout(() => {
      resolve(`Box with ${order}`);
    }, 2000); // 2 seconds delay
  });
}

// Counter lady: talks to the customer and hands over the box
function serveCustomer(customer, order) {
  console.log(`${customer} comes to the counter and asks for: ${order}`);

  return getBoxFromWarehouse(order).then((box) => {
    console.log(`Counter lady gives ${box} to ${customer}.`);
    console.log(`${customer} leaves happy.\n`);
  });
}

// Queue of people with orders
const queue = [
  { name: "Alice", order: "Laptop" },
  { name: "Bob", order: "Headphones" },
  { name: "Charlie", order: "Camera" },
];

// Process queue one by one using promise chaining
function processQueue(customers) {
  let promise = Promise.resolve(); // start with an empty promise

  customers.forEach((customer) => {
    promise = promise.then(() => serveCustomer(customer.name, customer.order));
  });
}

// Start serving customers
processQueue(queue);
