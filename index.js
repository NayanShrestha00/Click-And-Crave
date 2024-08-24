const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes');
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 4000;

dotEnv.config();
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully!"))
    .catch((error) => console.log(error))

    app.use(bodyParser.json());
    app.use('/vendor', vendorRoutes);
    app.use('/firm', firmRoutes);
    app.use('/product', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });

app.use('/home', (req, res) => {
    res.send('<h1> Welcome to the home page!');
    });
