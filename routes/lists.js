require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var House = require('../models/house');

//Post new chore route
router.post('/chore/create', function (req, res, next){
	console.log('post route firing', req.body.task, req.body.roommate, req.body.date, req.body.house);
	House.findOneAndUpdate({_id: req.body.house}, 
		{$push: {chores: {
			task: req.body.task,
			user: req.body.roommate,
			date: req.body.date}}},
		function(err, house){
			if(err) res.send(err);
			console.log('what the fuck we lookin at', house)
		});
	});




// // Delete chore route
// router.delete('/delete/:id', function(req, res, next){
// 	House.chores.findOneAndRemove({task: req.params.task}, function(err){
// 		if(err) return res.send(err);
// 		console.log('task completed');
// 	});
// 	res.redirect('/')
// });



// //Post new shopping item
// router.post('/shopping/create', function (req, res, next){
// 	House.findOneAndUpdate({_id: req.body.houseId},
// 		{$push: {
// 			shoppingItems: {
// 				item: req.body.item,
// 				user: req.body.roommate,
// 				date: req.body.date
// 			}
// 		}})
// })



//Delete shopping item
// router.delete('/delete/:id', function(req, res, next){
// 	House.shoppingItems.findOneAndRemove({task: req.params.task}, function(err){
// 		if(err) return res.send(err);
// 		console.log('task completed');
// 	});
// 	res.redirect('/')
// });




















module.exports = router;