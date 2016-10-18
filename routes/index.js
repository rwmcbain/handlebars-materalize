var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Russell' });
});

router.get('/about', function(req, res, next){
	var self = {
		name: 'Russell',
		phone: '734-635-6354',
		email: 'russell.mcbain@gmail.com'
	};
	// response.render() has two arguments
	// 1st: a template(view)
	// 2nd: an Object with data
	res.render('about', self);
});

router.get('/faq', function(req, res, next){
	var questions = {
		questions: ['What is your name?', 'Do you like musik?', 'What are you going to do when you get home?', 'When is your birthday?'],
		answers: ['russelll', 'yasss gaga', 'Herbal remedies', 'Tomorrow, bitch!']
	};
	res.render('faq', questions); //puts it on the page
});

router.get('/login', function(req, res, next){
	var user = {
		// name: 'russell',
		password: 'poodle',
		hint: 'black dog'
	};
	res.render('login', user);
});

module.exports = router;
