import React from 'react';
import '../App.css'; // Adjust the path based on the location of the file

function ProductCard({ product, addToCart }) {
  try {
    if (!product || !product.images || product.images.length === 0) {
      throw new Error('Product data is incomplete.');
    }

    const firstImage = process.env.PUBLIC_URL + product.images[0];

    return (
      <div className="product-card">
        <img src={firstImage} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  } catch (error) {
    console.error('Error displaying product:', error.message);
    
    // Provide a fallback or placeholder image
    const placeholderImage = 'images';

    return (
      <div className="product-card">
        <img src={placeholderImage} alt="Product Placeholder" />
        <h3>{product ? product.name : 'Unknown Product'}</h3>
        <p>${product ? product.price.toFixed(2) : '0.00'}</p>
        <button disabled>Add to Cart</button>
      </div>
    );
  }
}

export default ProductCard;









