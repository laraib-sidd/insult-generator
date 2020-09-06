const express = require('express')
const path = require('path')
const hbs = require('hbs')
const getInsult = require('./utils/data')

// Intitalising Express App
const app = express();
const port = process.env.PORT || 3000;

// Setting up file paths.
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../Templates/views')

// Setting up handlebars
app.set('view engine', 'hbs')
app.set('views', viewPath)

// Setting up static globalPath
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/insult', (req, res) => {
    const {insult,source} = getInsult();
    res.render('insult', {
        insult,
        source
    })
})

app.listen(port, () => {
    console.log('The server is running on ', port);
})