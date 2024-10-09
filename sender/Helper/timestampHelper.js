const moment = require('moment');

function getTimestamps() {
    const startTimestamp = moment().startOf('day').format('MMM DD, YYYY, h:mm:ss A');
    const endTimestamp = moment().endOf('day').format('MMM DD, YYYY, h:mm:ss A');
    const currentTimestamp = moment().format('MMM DD, YYYY, h:mm:ss A');

    return {
        startTimestamp,
        endTimestamp,
        currentTimestamp
    };
}

module.exports = getTimestamps;