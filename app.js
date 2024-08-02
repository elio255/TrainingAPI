const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());
const xlsx = require('xlsx');
require('dotenv').config();
const PORT = process.env.PORT || 3030;

// Read the Excel file and convert it to JSON
let wb = xlsx.readFile('data.xlsx');
let ws = wb.Sheets['names'];
let _data = xlsx.utils.sheet_to_json(ws);

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/students', function (req, res) {
    res.send(_data);
});

app.get('/students/:id', function (req, res) {
    const studentId = parseInt(req.params.id);
    const student = _data.find(st => st.id === studentId);
    if (student) {
        res.send(student);
    } else {
        res.status(404).send({ message: 'Student not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
