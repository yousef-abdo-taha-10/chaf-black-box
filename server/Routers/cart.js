const express = require('express');
const Cart = require('../Schemas/cart.shemas');
const router = express.Router();

// Middleware to get the current user's cart
const getUser = async (userId) => {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
        cart = await Cart.create({ userId, items: [] });
    }
    return cart;
};

// Endpoint to get the cart
router.get('/:userId', async (req, res) => {
    try {
        const cart = await getUser(req.params.userId);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart", error });
    }
});

// Endpoint to add an item to the cart
router.post('/:userId/add', async (req, res) => {
    try {
        const { burgerId, quantity } = req.body;
        const cart = await getUser(req.params.userId);

        const existingItem = cart.items.find(item => item.burgerId.toString() === burgerId);
        if (existingItem) {
            existingItem.quantity += quantity; // Update quantity if item exists
        } else {
            cart.items.push({ burgerId, quantity }); // Add new item
        }

        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error adding item to cart", error });
    }
});

// Endpoint to remove an item from the cart
router.delete('/:userId/remove/:burgerId', async (req, res) => {
    try {
        const cart = await getUser(req.params.userId);
        cart.items = cart.items.filter(item => item.burgerId.toString() !== req.params.burgerId);
        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error removing item from cart", error });
    }
});
// Endpoint to handle checkout
router.post('/:userId/checkout', async (req, res) => {
    try {
        const cart = await getUser (req.params.userId);

        if (cart.items.length === 0) {
            return res.status(400).json({ message: "Cart is empty, cannot proceed to checkout." });
        }

        // Here you would typically process the payment and create an order
        // For demonstration, we'll just return the cart items as an order
        const order = {
            userId: req.params.userId,
            items: cart.items,
            totalAmount: cart.items.reduce((total, item) => total + (item.price * item.quantity), 0) // Assuming each item has a price
        };

        // Clear the cart after checkout
        cart.items = [];
        await cart.save();

        res.json({ message: "Checkout successful", order });
    } catch (error) {
        res.status(500).json({ message: "Error during checkout", error });
    }
});

module.exports = router;