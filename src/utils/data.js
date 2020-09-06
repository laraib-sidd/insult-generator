const fs = require('fs')

const getInsult = () => {
    const data = fs.readFileSync('./src/utils/data.json', {
        encoding: 'utf8',
        flag: 'r'
    })
    const json_data = JSON.parse(data)
    const random_number = Math.floor(Math.random() * (json_data.length - 0) + 0);
    return json_data[random_number]
}

module.exports = getInsult;