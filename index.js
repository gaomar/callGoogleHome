const exec = require('child_process').exec;
const express = require('express');

// express
const app = new express();
const port = 3000;

app.post('/', (req, res) => {
        
    exec("callMemo.lnk", function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    });

    const responseJson = {
        "fulfillmentText": "ロボットを起動します。"
    };

    res.send(responseJson);

});

// run express server
app.listen(port, () => {
    console.log(`Server running on ${port}`)
});
