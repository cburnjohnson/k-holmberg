const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
const { v4 } = require('uuid');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('it works');
});

app.post('/payment', (req, res) => {
    const { product, token } = req.body;
    console.log('PRODUCT', product);
    console.log('PRICE', product.price);

    const idempotencyKey = v4();

    return stripe.customers
        .create({
            email: token.email,
            source: token.id,
        })
        .then((customer) => {
            stripe.charges.create(
                {
                    amount: product.price * 100,
                    currency: 'usd',
                    customer: customer.id,
                    receipt_email: token.email,
                    description: `Purchase of ${product.name}`,
                    shipping: {
                        name: token.card.name,
                        address: {
                            country: token.card.address_country,
                        },
                    },
                },
                { idempotencyKey }
            );
        })
        .then((result) => res.status(200).json(result))
        .catch((err) => console.log(err));
});

// Server static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
