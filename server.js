const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('./models/index');
const cors = require('cors');
const allRoute = require('./routes/index.route');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/myapp', allRoute);
app.listen(PORT, () => { console.log(`server is running on ${PORT}`) });
