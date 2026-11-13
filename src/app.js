const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const ministerRoutes = require('./routes/ministerRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(`/api`, ministerRoutes);
app.use(errorHandler);


async function startServer() {
    try {
        await mongoose.connect('mongodb://localhost:27017/folketinget');
        console.log('MongoDB Connected');
        app.listen(3000, () => console.log('Server klar på http://localhost:3000/api/'));
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exitCode = 1;
    }
}

startServer();
