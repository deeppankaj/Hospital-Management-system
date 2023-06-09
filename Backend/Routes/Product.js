const express = require("express");
const router = new express.Router();

router.get("/product",(req,res)=>{
    res.send("from Product routing")
})

module.exports = router