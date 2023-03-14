const express = require("express");
const router = express.Router();

const books = require("../util/data");
const bookService = require("../services/bookService");

router.get("/", async function (req, res, next) {
	try {
		res.status(200).json(await bookService.getMultiple());
	} catch (err) {
		console.error("Error while getting list of books ", err.message);
		res.sendStatus(501);
	}
});

router.get("/:id", async function (req, res, next) {
	/*	let book = books.find(function (item) {
			return item.id == req.params.id;
		});

		book ? res.status(200).json(book) : res.sendStatus(404);
	*/
	let id = req.params.id;

	let bookArray = await bookService.getOneBook(id);

	if (bookArray.data.length > 0) {
		res.status(200).json(bookArray.data[0]);
	} else {
		res.status(404).json("{msg: No hay un libro con ese id}");
	}
});

router.post("/", async function (req, res) {
	const {
		title,
		author,
		finished
	} = req.body;

	let book = {
		title: title,
		author: author,
		finished: finished !== undefined ? finished : false
	};

	// books.push(book);
	const created = await bookService.createBook(book);
	const idCreated = created.data.insertId;
	const createdBook = await bookService.getOneBook(idCreated);


	res.status(201).json(createdBook);
});

router.put("/:id", async function (req, res) {
	const paramId = req.params.id;
	const getBook = await bookService.getOneBook(paramId);
	if (getBook.data.length > 0) {
		const { title, author, finished} = req.body;
		let updatedBook = getBook.data[0];

		updatedBook.title = title !== undefined ? title : updatedBook.title;
		updatedBook.author = author !== undefined ? author : updatedBook.author;
		updatedBook.finished = finished !== undefined ? finished : updatedBook.finished;

		const data = await bookService.modifyBook(updatedBook);

		console.debug("retorno:");
		console.debug(data);
		res.status(201).json(data);

	} else {
		res.sendStatus(404);
	}
});

router.delete("/:id", function (req, res) {
	let book = books.find(function (item) {
		return item.id == req.params.id;
	});

	if (book) {
		books.splice(books.indexOf(book), 1);
	} else {
		return res.sendStatus(404);
	}

	res.sendStatus(204);
});

module.exports = router;