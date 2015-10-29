var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uristring = 	// define uri for connect to database
  process.env.MONGOLAB_URI || // if using mongolab
  process.env_MONGOHQ_URI ||  // if using mongohq
  // 'mongodb://localhost/heroku_z72ngjxb'; 
  'mongodb://heroku_z72ngjxb:heroku_z72ngjxb@ds053597.mongolab.com:53597/heroku_z72ngjxb';
  
var wait = new schema({		// define schema for wait table
	user_id : String,
	content : String,
	update_at : Date
});

mongoose.model('wait', wait);	// register model
mongoose.connect(uristring, function(err, res){ // connect with uri
  if(err) { 
    console.log('ERROR connected to: ' + uristring);
  } else {
    console.log('Succeeded connected to: ' + uristring);
  }
});
