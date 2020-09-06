const fs = require('fs')
const data = require('./insults')

const getInsult = () => {
    const random_number = Math.floor(Math.random() * (data.length - 0) + 0);
    return data[random_number]
}

module.exports = getInsult;