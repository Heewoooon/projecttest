const express = require('express');
const router = express.Router();
const conn = require('../../../DB/db');
const path = require("path");

// 메인 

// router.get('/',(req,res){
//     res.sendFile(path.join(__dirname,"..",""))
// })