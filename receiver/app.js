const express = require('express');
const app = express();

const PORT = 3002;
app.use(express.json({limit: '100mb'}));

let eventData = null;

app.post('/hrsEvent', (req, res)=>{
    eventData = req.body;
    console.log('Received Event Data:', eventData);
    

    if(eventData && eventData.id){
        return res.status(200).send({
            message: 'Event received successfully',
            success: true
        })
    }
    return res.status(400).send({
        message: 'Invalid Event Data',
        success: false
    })
})

app.get('/receivedEvent', (req, res) => {
    if (eventData) {
        res.json({
            message: 'Latest event data received by receiver',
            eventData,
        });
    } else {
        res.status(404).json({
            message: 'No event data received yet',
        });
    }
});

app.listen(PORT, () =>{
    console.log(`Receiver running on port ${PORT}`);
})