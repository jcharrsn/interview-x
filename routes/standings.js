var mysql = require("mysql");
var express = require("express");
var router = express.Router();
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'socceradmin',
	password : '!@#qweASDzxc',
	database : 'soccerleaguedb'
});

function connectToMySQL(){
	connection.connect(function(err){
	if(!err){
		console.log("Database is connected... \n\n");
	}else{
		console.log("Error connecting to Database!!! \n\n");
	}
});
}
connectToMySQL();


router.get('/', function (req, res){
	//connectToMySQL();
	connection.query('SELECT * FROM teams', function(err, rows, fields){
		//connection.end();
		if(!err){
			res.json(rows);
			console.log(rows);
		} else {
			console.log('Error while performing query!!!');
		}
	})
})

module.exports = router;