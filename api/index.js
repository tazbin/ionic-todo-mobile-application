const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const itemsRoute = require('./routes/items.route')

const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.json())

// database connection
mongoose.connect('mongodb://127.0.0.1:27017/ionic_todo', { useNewUrlParser: true });

mongoose.connection.on('error', err => {
    console.log('ERROR! ' + err);
});

mongoose.connection.on('connected', err => {
    console.log('connection established...');
});
// databse connection

app.use('/api', itemsRoute)
app.get('/', (req, res, next) => {
    res.status(200).send({
        'message': 'Unauthozied route'
    })
})

app.listen(port, () => {
    console.log('server listening to port ' + port + '...')
})