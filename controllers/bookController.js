import Book from "../models/Book.js";
import Author from "../models/Author.js";


const createBook = async (req, res) => {

    let authorsData = req.body.authors;
    const bookData = req.body.book;

    if (!authorsData || !bookData) {
        res.status(400).json({
            msg: 'AuthorsData or bookData missing'
        });
    }

    if (!Array.isArray(authorsData)) {
        res.status(400).json({
            msg: 'authorData must be an array',
        });
    }

    authorsData = authorsData.map(author => {
        return new Author(author);
    });

    try {
        const newBook = await Book.create({
            genre: bookData.genre,
            isbn: bookData.isbn,
            title: bookData.title,
            year: bookData.year,
            authors: authorsData
        });
        res.json(newBook);

    } catch (error) {
        res.status(500).json({
            msg: "Error al crear Book",
            error,
        });
    }
};

export { createBook }