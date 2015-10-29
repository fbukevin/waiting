var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uristring = 	// define uri for connect to database
  process.env.MONGOLAB_URI || // if using mongolab
  process.env_MONGOHQ_URI; // if using mongohq
  // 'mongodb://localhost/waits'; 
  // 'mongodb://<dbuser>:<dbpass>@<host>:<port>/<dbname>';
  // 這兩個在 heroku 都沒差，heroku 還是最自己去連一組
  // 注意，如果你刪除後新增了一個 heroku_XXXXX，就算密碼你改回你在 log 看到的也沒有用，只能夠先移除 add-on 後在新增一次
  // 這樣好像比較安全，就不用留帳密在 GitHub 上了

  
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
