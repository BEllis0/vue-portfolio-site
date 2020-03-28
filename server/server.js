const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// ==== middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});