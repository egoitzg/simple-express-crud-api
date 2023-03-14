const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  //const offset = helper.getOffset(page, config.listPerPage);
  // const rows = await db.query(
  //   `SELECT * 
  //   FROM books LIMIT ${offset},${config.listPerPage}`
  // );
  const rows = await db.query(`SELECT * FROM books`);

  const data = helper.emptyOrRows(rows);
  const meta = {
    page
  };

  return {
    data,
    meta
  }
}

async function getOneBook(id) {

  const rows = await db.query('SELECT * FROM books WHERE id=' + id + ';');

  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function createBook(book) {

  let sql = "INSERT INTO `books` (`title`, `author`, `finished`, `createdAt`) VALUES (";
  sql += "'"+book.title+"','"+book.author+"','"+book.finished+"'";
  sql += ", current_timestamp());";

  console.debug(sql);

  const rows = await db.query(sql);

  const data = helper.emptyOrRows(rows);
  return {data}

}

async function modifyBook(book){

  let sql = "UPDATE `books` SET `title` = ";
  sql+= "'" + book.title +"', `author` = '" + book.author + "', `finished` = ' "+ book.finished +"' WHERE `books`.`id` =" + book.id + ";";

  const rows = await db.query(sql);
  const data = helper.emptyOrRows(rows);

  return data
}

async function deleteBook(id){
  let sql = "DELETE FROM books WHERE id ='" + id + "';"

  const rows = await db.query(sql);
  const data = helper.emptyOrRows(rows);

  return { data }
}

module.exports = {
  getMultiple,
  getOneBook,
  createBook,
  modifyBook,
  deleteBook
}