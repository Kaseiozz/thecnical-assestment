const fs = require('fs');

const getStats = async () =>  {
    const rawData = fs.readFileSync('./data/test-data.json');
    return JSON.parse(rawData);
}

module.exports = {
    getStats: () => getStats(),
};