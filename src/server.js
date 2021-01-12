const dotenv = require('dotenv');

dotenv.config();

const app = require('./app.js');
const port = process.env.PORT;

app.listen( port , (req, res) => {
    console.log(`express listening on port ${port}`);
})