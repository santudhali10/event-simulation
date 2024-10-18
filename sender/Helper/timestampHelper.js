const moment = require('moment');

function getTimestamps() {
    const startTimestamp = moment().startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    const endTimestamp = moment().endOf('day').format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    const currentTimestamp = moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');

    return {
        startTimestamp,
        endTimestamp,
        currentTimestamp
    };
}

module.exports = getTimestamps;