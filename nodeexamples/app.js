// console.log("Hello World");

// var http = require('http')

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write("Hiiii")
//     res.end();
// }).listen(5000)


// const calc = require('./calc');
// ans=calc.add(2,3)
// console.log(ans)

const fs = require('fs')
// fs.readFile("calc.js","utf8",function (err,data) {
//     console.log(data);
// })
fs.writeFile("abc.txt","Hii i am keerthana","utf8",function(req,res){
    console.log("Created")
})
console.log("Running")

