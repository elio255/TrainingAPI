const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3030;
console.log(process.env.ALI)
// your code
app.get('/', function (req, res) {
    res.send('Hello World')
  })
  app.get('/students', function (req, res) {
   var data = [
    {id:1, name:'Mhmd Mhmd'},
    {id:2, name:'dania'},
    {id:3, name:'Ali'},
    {id:4, name:'Rita'}
]
    res.send(data)
  })
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});