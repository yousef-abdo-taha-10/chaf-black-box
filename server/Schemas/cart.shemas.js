const mongoose = require('mongoose');
const schema =mongoose.Schema

const cartItemSchema = new schema({
    burgerId: { type: schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true, default: 1 },
});

const cartSchema = new schema({
    userId: { type: schema.Types.ObjectId, required: true },
    items: [cartItemSchema],
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;