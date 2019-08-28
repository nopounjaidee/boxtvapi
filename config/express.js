var express = require('express');
var bodyparser = require('body-parser');

module.exports = function()
{
    var app = express();
    app.set('port', process.env.PORT || 3000); // Fix port
    app.use(bodyparser.json()); 
    //Alow On website
    app.use(function(req,res,next){
        res.setHeader('Access-Control-Allow-Origin','*');
        //res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
        res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers','content-type, x-access-token');
        res.setHeader('Access-Control-Allow-Credentials','*');
        next();
    });
    require('../app/routes/routes')(app);
    
    return app;
};