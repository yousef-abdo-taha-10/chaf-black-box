import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';
import './Product.css'; // Custom styles for layout

const App = () => {
    const products = [
        {
            id: 1,
            name: 'Skinny Buffalo',
            price: 245,
            description: 'A grilled lean burger patty on a multi-grain bread bun with Thousand Island sauce.',
            image: '/images/buffalo.jpg', // Provide the path to your images
        },
        {
            id: 2,
            name: 'Old School',
            price: 199,
            description: 'Pure beef burger patty, topped with our signature Buffalo sauce and cheddar cheese.',
            image: '/images/old-school.jpg', // Provide the path to your images
        },
        {
            id: 3,
            name: 'Four Cheese Pizza',
            price: 150,
            description: 'Mozzarella cheese + Gorgonzola cheese + Parmesan cheese + Ricotta cheese.',
            image: '/images/pizza.jpg', // Provide the path to your images
        },
        {
            id: 4,
            name: 'French Fries',
            price: 40,
            description: 'A grilled lean burger patty on a multi-grain bread bun with Thousand Island sauce.',
            image: '/images/fries.jpg', // Provide the path to your images
        },
        {
            id: 5,
            name: 'Lemonade',
            price: 80,
            description: 'A refreshing lemonade drink.',
            image: '/images/lemonade.jpg', // Provide the path to your images
        },
    ];

    const [cart, setCart] = useState([]);

    const updateCart = (productId, quantity) => {
        const updatedCart = [...cart];
        const index = updatedCart.findIndex(item => item.id === productId);
        if (index !== -1) {
            updatedCart[index].quantity = quantity;
        } else {
            const product = products.find(item => item.id === productId);
            updatedCart.push({ ...product, quantity });
        }
        setCart(updatedCart);
    };

    return (
        <div className="app">
            <div className="products">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        updateCart={updateCart}
                    />
                ))}
            </div>
            <Cart cartItems={cart} />
        </div>
    );
};

export default App;
