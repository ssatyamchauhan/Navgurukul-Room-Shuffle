const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;


var endpoints = express.Router();
app.use('/',endpoints);
require('./roomshuffle')(endpoints)



app.listen(PORT, () => {
    console.log('Your app is listening port',PORT);
})

