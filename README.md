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

## Tareas a Realizar
Estos son los siguientes pasos que hay que realizar:
* Crear la base de datos MySql en el Xamp y crear una base de datos nueva llamada "library" (para seguir con el ejemplo).
* Crear la tabla books, con los mismos campos que tiene el archivo data.js. Poblar con datos esta tabla.
* Descargar el proyecto completo de esta rama, y comprobar que funciona (npm install / npm start)
* Probar que el endpoint GET / accede a la base de datos y recoje correctamente los datos de la base de datos creada.
* Aplicando la misma lógica, implementar los otros 4 endpoints de libros.
