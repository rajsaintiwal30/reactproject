var express = require('express');
var app = express();
app.use(express.static('./node_users/public'))
var routeapi = require('./node_users/nodeapi');

app.use('/nodeapi',routeapi)

app.listen(3001,function(){
	console.log('node app started')
})