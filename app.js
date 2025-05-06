const dotenv = require('dotenv'); //keep this at top mostly
const express = require('express');
const mongoose = require('mongoose');

const employeeRoutes = require('./routes/employeeRoutes');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/employees', employeeRoutes);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected');
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });
