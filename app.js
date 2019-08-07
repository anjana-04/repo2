var express=require('express')
var prdrouter=require("./routes/prdrouter")
var emprouter=require("./routes/emprouter")
const app=express();
app.set('view engine',"ejs")
app.set("views","./src/views")
app.use("/products",prdrouter)
app.use("/employees",emprouter)
app.get("/",function(req,res){
res.render("home")
})
app.listen(8000,function(req,res){
    console.log("loading")
})