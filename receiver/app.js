const express = require('express');
const app = express();

const PORT = 3001;
app.use(express.json({limit: '100mb'}));

app.post('/hrsEvent', (req, res)=>{
    const eventData = req.body;
    console.dir(eventData, { depth: null, colors: true });
    

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

app.listen(PORT, () =>{
    console.log(`Receiver running on port ${PORT}`);
})