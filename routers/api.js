/**
 * Created by linwang on 2018/1/16.
 */
var express = require('express');
var router = express.Router();

router.get('/user',function(req,res,next){
    res.send('API-User');
});

module.exports = router;
