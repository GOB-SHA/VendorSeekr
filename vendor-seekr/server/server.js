const express = require('express');
const app = express();
const cors = require("cors");
// const path = require('path');

//middleware
app.use(cors());
app.use(express.json());

app.listen(3000, () => {console.log('listening on port 3000')});