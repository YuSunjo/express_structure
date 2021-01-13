// const dotenv = require('dotenv');
import dotenv from 'dotenv';

dotenv.config();

// const app = require('./app.js');
import app from './app.js';
const port = process.env.PORT;

app.listen( port , (req, res) => {
    console.log(`express listening on port ${port}`);
})