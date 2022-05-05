const express = require("express");
const ejs=require("ejs");
const { request } = require("express");
app.use(express.static("static"));
const toukou1 = [""];

const app = express();
app.use(express.static("static"));
app.use(express.urlencoded({extended:true}));
app.get("/", (request, response) => {
const template =fs.readFileSync("template.ejs","utf-8");
 const toukou2=ejs.render(template,{
    listItems:toukou1,
});
app.post("/send",(request,response)=>{
   const toukou1=toukou2.push(request.body.toukou);
   response.send(toukou1)
});

app.listen(3000);
