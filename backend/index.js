const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 5000;
const app = express();


app.use(bodyParser.json());
app.use(cors());


const atc = require('./routes/api/atc');
const { response } = require('express');
app.use('/api/atc', atc);


app.use(express.static(__dirname + '/public/'));
app.get(/.*/, (req, res) => (
    res.sendFile(__dirname + '/public/index.html'
)));


app.listen(PORT, () => console.log(`server started on port ${PORT}`));
