const express = require("express");
const router = express.Router();

const authors = require("../util/author");

router.get("/", function (req, res) {
	res.status(200).json(authors);
});

router.get("/active", function(req,res){
	let activeArray = authors.filter(author => author.active == true);
	res.status(200).json(activeArray);
});

router.get("/:id", function (req, res) {
	let author = authors.find(function (item) {
		return item.id == req.params.id;
	});

	author ? res.status(200).json(author) : res.sendStatus(404);
});

router.post("/", function (req, res) {
	const { name, active } = req.body;

	if(name === undefined || active === undefined){
		res.sendStatus(400);
	} else {
		
		let author = {
			id: authors.length + 1,
			name: name,
			active: active,
		};
	
		authors.push(author);
	
		res.status(201).json(author);
	}
});

router.put("/:id", function(req, res){
	
	const { name } = req.body;
	
	if( name === undefined){
		res.sendStatus(400);
	} else {
		let author = authors.find(function (item) {
			return item.id == req.params.id;
		});

		if(author){

			let updated = {
				id: author.id,
				name : name,
				active: author.active
			}
			authors.splice(authors.indexOf(author),1,updated);

			res.status(201).json(updated);
		} else {
			res.sendStatus(404);
		}

	}
	
});

router.put("/toggleActive/:id", function(req, res){
	let author = authors.find(function (item) {
		return item.id == req.params.id;
	});

	if (author){
		author.active = !author.active;

		authors.splice(authors.indexOf(author),1,author);
		res.status(201).json(author);
	} else {
		res.sendStatus(404);
	}
})

module.exports = router;
