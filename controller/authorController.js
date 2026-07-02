const authorController = require('../models/author')
const bookController = require('../models/book')
const asyncHandler = require('../utils/asyncHandler');

const createAuthor = asyncHandler(async (req, res) => {
    const author = await authorController.create(req.body);
    res.status(201).json(author);
});

const getAllAuthors = asyncHandler(async (req, res) => {
    const authors = await authorController.find();
    res.status(200).json(authors);
});

const getAuthorById = asyncHandler(async (req, res) => {
    const author = await authorController.findById(req.params.id);

    if (!author) {
        res.status(404);
        throw new Error('Author not found');
    }
    res.status(200).json(author);
});

module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById
};