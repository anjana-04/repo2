var express=require('express')
const router=express.Router();
router.get("/",function(req,res){
    res.render("products")
})
router.get("/new",function(req,res){
    res.render("new")
})
router.get("/new/ret",function(req,res){
    res.send("retail product used")
})
router.get("/new/whole",function(req,res){
    res.send("wholesale product used")
})
router.get("/delet",function(req,res){
    res.send("product deleted")
})
module.exports=router;