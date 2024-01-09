const http=require('http');
const fs=require('fs');

let path="./";
const server=http.createServer((req,res)=>{
    console.log("Server started");
    let url=req.url;
    res.setHeader("Content-Type","text/html")
    switch(url){
        case "/":
            path="index.html";
            break;
        case "/about":
            path="about.html";
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            res.end("Sorryyy!!!!!");
        }
        else{
            res.end(data);
        }
    })
})
server.listen(8000,()=>{
    console.log("Listening...")
})