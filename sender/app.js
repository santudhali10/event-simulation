const express = require('express');
const sendEvent = require('./sender');
const app = express();


const PORT = 3000;
app.use(express.json());

app.get('/sendEvent', (req, res) => {
    const eventData = sendEvent();
    res.json({
        message: 'Event data sent from sender',
        eventData,
    });
});

app.listen(PORT, () =>{
    console.log(`Sender running on port ${PORT}`);
})