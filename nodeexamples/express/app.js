const express = require('express')
app = express()
app.get('/',function(req,res){
    const id=req.query.id;
    res.send("Welcome "+id)
})
app.get('/:id',function(req,res){
    const id=req.params.id;
    res.send("Hello "+id)
})
app.listen(8080,function (req,res) {
    console.log("Running")
})