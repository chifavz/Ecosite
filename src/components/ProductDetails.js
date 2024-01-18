// src/components/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../App.css';

const products = [
  {
    id: 1,
    name: 'Sneakers',
    price: 19.99,
    images: ['image-product-1.jpg', 'image-product-1-thumbnail.jpg', 'image-product-2-thumbnail.jpg', 'image-product-3-thumbnail.jpg' , 'image-product-4-thumbnail.jpg' ]
  },
  {
    id: 2,
    name: 'Sneakers 2',
    price: 29.99,
    images: ['image-product-2.jpg', 'image-product-2-thumbnail.jpg'],
  },
  {
    id: 3,
    name: ' Sneakers3',
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

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === parseInt(id));

    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      console.error('Product not found');
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Fall limted Sneakers</h2>
      <p>Nice comfortable foot wear</p>
      <ProductCard product={product} addToCart={addToCart} />
      <div>
        {/* Accessing images from public directory */}
        {product.images.map((image, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/images/${image}`}
            alt={`Product ${product.id} - ${index}`}
          />
        ))}
      </div>
      {/* Additional details or buttons can be added here */}
    </div>
  );
}

export default ProductDetails;
