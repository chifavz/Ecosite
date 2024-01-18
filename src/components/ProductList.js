// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../App.css';

const products = [
  {
    id: 1,
    name: 'Sneakers 1',
    price: 19.99,
    images: ['image-product-1.jpg', 'image-product-1-thumbnail.jpg'],
  },
  {
    id: 2,
    name: 'Sneakers 2',
    price: 29.99,
    images: ['image-product-2.jpg', 'image-product-2-thumbnail.jpg'],
  },
  {
    id: 3,
    name: 'Sneakers 3',
    price: 19.99, 
    images: ['image-product-3.jpg', 'image-product-3-thumbnail.jpg'],
  },
  {
    id: 4,
    name: 'Sneakers 4',
    price: 29.99,
    images: ['image-product-4.jpg', 'image-product-4-thumbnail.jpg'],
  },
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Fall limted Sneakers</h2>
      <div className="product-list">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;


