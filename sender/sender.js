const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const  getTimestamps  = require('./Helper/timestampHelper');
const  getImageBase64  = require('./Helper/imageHelper');
const http = require('http');

const imagesFolderPath = path.join(__dirname, 'Image');
const configFilePath = path.join(__dirname, 'Config/configTemplate.json');

const sendEvent = () => {
    const configData = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
    const { startTimestamp, endTimestamp } = getTimestamps();
    const eventId = uuidv4();
    
    configData.id = eventId;
    configData.startTimestamp = startTimestamp;
    configData.endTimestamp = endTimestamp;
    
    for(let i = 0; i < configData.data.length; i++) {
        const { currentTimestamp } = getTimestamps();
        configData.data[i].timestamp = currentTimestamp;
        configData.data[i].base64data = getImageBase64(imagesFolderPath);
    }
  
    const jsonData = JSON.stringify(configData);

    const options = {
        hostname: 'localhost',
        port: 3001,
        path: '/hrsEvent',
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'content-length': Buffer.byteLength(jsonData)
        }
    };

    const req = http.request(options, (res) =>{
        let responseData = '';
        res.on('data', (chunk) => {
            responseData += chunk;
        });

        res.on('end', () => {
            console.log('Response from receiver:', responseData);
        });
    });

    req.on('error', (error) => {
        console.error('Error sending event:', error.message);
    });


    try{
        req.write(jsonData);
        req.end();
    }catch(error){
        console.error('Error sending event:', error.message);
    }
};

setInterval(sendEvent, 15000);

module.exports = sendEvent;
