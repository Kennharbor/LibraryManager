const book = require('../models/book');

exports.borrowBook = async (req, res) => {
    try {
        const { bookId, studentId, attendantId } = req.body;
        const book = await book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        if (book.status !== 'Available') {
            return res.status(400).json({ message: 'Book is not available' });
        }
        book.status = 'Not Available';
        book.borrowedBy = studentId;
        book.issuedBy = attendantId;
        book.issuedDate = new Date();
        book.returnDate = new Date();
        book.returnDate.setDate(book.issuedDate.getDate() + 7);
        await book.save();
        res.status(200).json({ message: 'Book borrowed successfully', book });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};