console.log("Hello via Bun!");

// Write for me a server that using expressjs

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Write for me a fatactory pattern using typescript

// Here we define an interface for our Product
interface Product {
  id: number;
  name: string;
  price: number;
}

// This function is our factory method for creating Product instances
// It takes in the necessary parameters and returns a new Product
function createProduct(id: number, name: string, price: number): Product {
    return {
        id,
        name,
        price
    }
}

// Here we use our factory method to create a new Product instance
const product = createProduct(1, 'Product 1', 100);
// We then log the new Product to the console
console.log(product);


