import * as Bookcontroller from '../controllers/BookController.js'
import express from 'express'

const bookRoutes = express.Router();

bookRoutes.get('/all', Bookcontroller.fetchBooks);
bookRoutes.post('/new', Bookcontroller.createBook);
bookRoutes.put('/edit/:bookId', Bookcontroller.editBook);
bookRoutes.delete('/delete/:bookId', Bookcontroller.deleteBook);

export default bookRoutes;