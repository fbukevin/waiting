var mongoose = require('mongoose');
var schema = mongoose.Schema;

var wait = new schema({
	user_id : String,
	content : String,
	update_at : Date
});

mongoose.model('wait', wait);
mongoose.connect('mongodb://localhost/express-wait');
