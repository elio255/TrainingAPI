const express = require("express");
const app = express();

const xlsx = require('xlsx');
const fs = require('fs');
let wb = xlsx.readFile('data.xlsx');
let ws = wb.Sheets['names'];
let _data = xlsx.utils.sheet_to_json(ws);
require('dotenv').config();
const PORT = process.env.PORT || 3030;
console.log(process.env.ALI)
// your code
app.get('/', function (req, res) {
    res.send('Hello World')
  })
  app.get('/students', function (req, res) {
   //var data = [
    //{id:1, name:'Mhmd Mhmd'},
    //{id:2, name:'dania'},
    //{id:3, name:'Ali'},
    //{id:4, name:'Rita'}
//]
    res.send(_data)
  })
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});