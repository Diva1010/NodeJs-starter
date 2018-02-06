var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    var message = 'Hello World';
    res.render('index', {msg: message});
});

router.get('/user', function(req, res){
    var users = [
        { name: 'John', age: 24, employee: 'yes', address: 'L.A' },
        { name: 'Judy', age: 31, employee: 'yes', address: 'California' },
        { name: 'Mark', age: 26, employee: 'no', address: 'Alaska' },
        { name: 'Claire', age: 28, employee: 'no', address: 'L.A' },
        { name: 'Claude', age: 22, employee: 'yes', address: 'L.A' },
    ];
    var note = "The details provided below are the active employees of our organization"
    res.render('user',{
        Allusers: users,
        note : note
    })
})
module.exports = router;