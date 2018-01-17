/**
 * Created by linwang on 2018/1/16.
 */
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('main/index');
});

module.exports = router;