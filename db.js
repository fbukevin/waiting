var mongojs = require('mongojs');
var db = mongojs('mongodb://heroku_z72ngjxb:heroku_z72ngjxb@ds053597.mongolab.com:53597/heroku_z72ngjxb' //uri
          , ["waits"]     // database
          , {authMechanism: 'ScramSHA1'}  // for MongoLab auth
          );

db.waits.find(function(err, docs){
  console.log(docs);  
});