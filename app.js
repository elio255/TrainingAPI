const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3030;
console.log(process.env.ALI)
// your code
app.get('/', function (req, res) {
    res.send('Hello World')
  })
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});