const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

//routes import
const routes = require('./routes');

const app = express();

// ==== middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});