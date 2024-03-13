import express from 'express'


const bookRoutes = express.Router();

bookRoutes.post('/', createBook);

export default bookRoutes;