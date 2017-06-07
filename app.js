var express = require("express");
var bodyParser = require('body-parser');

var app = express();


app.set('view engine', 'ejs')
app.set('view cache', false)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/public', express.static('public'))

var myArray = [];
var obj = {};
const port = 3030;

app.get("/", function(req, res){
 	res.render("home");
});

//to parse data from the body
app.post('/', function(req, res){
	var email = req.body.email;
	var phone = req.body.phone;
	var reasons = req.body.reasons;
	var broker = req.body.broker;
	obj = {
		email: email,
		phone: phone,
		reasons: reasons,
		broker: broker
	}
	myArray.push(obj);
	console.log(obj, myArray);		
	res.redirect("/")
});

app.get('/about', function(req, res){
	res.render('about');
});

app.get('/contact', function(req, res){
	res.render('contact');
});




app.listen(port, ()=>{
  console.log("i am listening on port: " + port)
})
