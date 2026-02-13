import React, { useState } from 'react';
import ProductList from './components/ProductList';

export default function App(){
  // TODO: Define initial product data
  const products= [
    { "id": 1, "name": "Laptop", "price": "$999", "inStock": true },
    { "id": 2, "name": "Phone", "price": "$699", "inStock": false },
    { "id": 3, "name": "Tablet", "price": "$499", "inStock": true }
  ]

  // TODO: Implement state to manage filtering
  const [show, setShow] = useState("all");

  // TODO: Implement logic to filter products based on availability
   const filteredProducts = products.filter((product) => {
    if (show === "all") return true;     
    if (show === "in") return product.inStock; 
    return !product.inStock;          
  });
  return (
    <div>
      <h1>Product Dashboard</h1>

      <button onClick={() => setShow("all")}>All</button>
      <button onClick={() => setShow("in")}>In Stock</button>
      <button onClick={() => setShow("out")}>Out of Stock</button>

      <ProductList products={filteredProducts} />
    </div>
  );

}
 