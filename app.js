const express = require('express')
const app = express()


app.use('*',(req,res) =>{
    res.send('<h1>Hello from node app</h1>');
});
app.listen(4000, () =>{
    console.log('App listing on 4000')
});
