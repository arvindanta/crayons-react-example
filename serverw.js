const express = require('express');
const path = require('path');
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, 'webc/dist')));

app.use('/registry.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'webc/registry.json'));
});

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'webc/webc.html'));
});

app.listen(9002);
