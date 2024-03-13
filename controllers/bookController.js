import Book from "../models/Book.js";
import Author from "../models/Author.js";


const createBook = async (req, res) => {

    const authorData = req.body.authors;
    const bookData = req.body.book;

    if(!authorData || !bookData) {
        res.status(400).json({
            msg: 'AuthorsData or bookData missing'
        });
    }

    if(!Array.isArray(authorData)) {
        res.status(400).json({
            msg: 'authorData must be an array',
        });
    }

    const author = new Author({})





    try {
        const newBook = await Book.create({

        });
        res.json(newBook);

    } catch (error) {
        res.status(500).json({
            msg: "Error al crear book",
            error,
        });
    }
};


export { createBook }