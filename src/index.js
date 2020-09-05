const express = require('express')
const path = require('path')
const request = require('request');
request('https://www.nosweatshakespeare.com/resources/shakespeare-insults/', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body.innerText); // Print the HTML for the Google homepage.
});

const app = express();

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log('The server is running on ', port);
})