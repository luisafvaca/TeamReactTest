const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const store = require('./apiData');

app.use(cors());

app.get('/store', function(req, res){
    console.log(req, 'req', res, 'res')
    return res.json({store})
})
const server = app.listen(port, function(){
    console.log(`---Express server is running on port: ${port}--`);
})
