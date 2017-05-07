var express = require('express');
var router = express.Router();
var database = require(process.cwd()+'/node_users/db/mongo');


router.post('/addUser', function(request,response){
	console.log('inside');
  newUser = request.data;
  console.log(newUser);

  database.addUser(newUser,function(status){
    response.send({status:0})
  });
})
module.exports = router;