const express = require('express')
const path = require('path')
const https = require('https')

const app = express();

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))
https.get('https://www.nosweatshakespeare.com/resources/shakespeare-insults/',
    (res => console.log(res)))
app.listen(port, () => {
    console.log('The server is running on ', port);
})