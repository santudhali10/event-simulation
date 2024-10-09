const express = require('express');
const sendEvent = require('./sender');
const app = express();


const PORT = 3000;
app.use(express.json());

app.listen(PORT, () =>{
    console.log(`Sender running on port ${PORT}`);
    sendEvent();
})