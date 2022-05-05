const http=require("http");

const server = new http.Server();//http.Serverはクラス

//const server=http.creatServer((request,response)=>{response.write();response.end();})
server.addListener("request",(request,response)=>{
    if(request.url === "/secret"){
        response.write("secret");
    }
    else{
        response.write(`<a href="/secret">Click me!</a>`);//aタグ    
    }
    response.end();
    
});
server.listen(3000);  //ctrl+cで終了 
console.log(`the server has started and is listening on port number:${3000}`);

//express
const express=require("express");

const app=express();
app.get("/",(request,resonse)=>{
    resonse.send("hello express");

});
app.listen(3000);


const fs = require("fs");
const express = require("express");
const ejs = require("ejs");
const { response } = require("express");
const app = express();

const n =0;
app.get("/",(request,response)=>{
    n+=1; 
    const template =fs.readFileSync("template.ejs","utf-8");
    const html=ejs.render(template,
  });
    response.send(html);
  });

app.listen(3000);

