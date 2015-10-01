var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uristring = 
  process.env.MONGOLAB_URI || // if using mongolab
  process.env_MONGOHQ_URI ||  // if using mongohq
  'mongodb://localhost/express-wait'; 
  
var wait = new schema({		// define schema for wait table
	user_id : String,
	content : String,
	update_at : Date
});

mongoose.model('wait', wait);	// register model
mongoose.connect(uristring, function(err, res){
  if(err) { 
    console.log('ERROR connected to: ' + uristring);
  } else {
    console.log('Succeeded connected to: ' + uristring);
  }
});
