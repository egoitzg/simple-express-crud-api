# simple-express-crud-api
This is just a simple CRUD API of Books made with Express. The aim is to provide an API as starting point to other implementations or tests.

To start it, install Node and run:

```
npm install
npm start
```
## Avaiable endpoints to use
In this API we have to endpoints to work with:

* /books
```
GET / -> Collection of all books
GET /:id -> Book with the id param
POST / -> Save a book from JSON in body
PUT / -> Modify a book from JSON in body
DELETE / -> Delete a book
```
