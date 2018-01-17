/**
 * Created by linwang on 2018/1/17.
 */
var mongoose = require('mongoose');
var usersSchema = require('../schemas/users');

module.export = mongoose.model('User',usersSchema);
