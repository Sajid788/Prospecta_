const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./productRoutes');

const PORT = 8080;

const app = express();
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ msg: "Hello world" });
});
app.use('/api', productRoutes);



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});