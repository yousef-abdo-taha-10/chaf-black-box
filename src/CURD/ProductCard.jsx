import React, { useState } from 'react';

const ProductCard = ({ product, updateCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (delta) => {
        if (quantity + delta >= 1) {
            setQuantity(quantity + delta);
            updateCart(product.id, quantity + delta);
        }
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price} EGP</p>
                <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>
                <p>Total: {product.price * quantity} EGP</p>
            </div>
        </div>
    );
};

export default ProductCard;
