const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/config');
const mongoose = require('mongoose');
const route = require('./routers/router');
const app = express();
var cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true }))

// app.use(bodyParser.json())
app.use(cors());

app.use('/api', route)
app.use(express.static('../EmployeeManagementSystem'));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});