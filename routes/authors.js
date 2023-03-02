const express = require("express");
const router = express.Router();

const authors = require("../util/author");

router.get("/", function (req, res) {
	res.status(200).json(authors);
});

router.get("/:id", function (req, res) {
	let author = authors.find(function (item) {
		return item.id == req.params.id;
	});

	author ? res.status(200).json(author) : res.sendStatus(404);
});

router.post("/", function (req, res) {
	const { name, active } = req.body;

	let author = {
		id: authors.length + 1,
		name: name,
		active: active !== undefined ? active : false,
	};

	authors.push(author);

	res.status(201).json(author);
});

module.exports = router;
