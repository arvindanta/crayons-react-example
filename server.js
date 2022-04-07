const express = require('express');
const path = require('path');
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, 'build1')));
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build1/main.html'));
});

app.listen(9000);
