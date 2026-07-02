const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        unique: true,
    },
    authors: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Author',
        required: true
    },
    status: {
        type: String, 
        enum: ['Available', 'Not Available'], default: 'Available'
    },
    borrowedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student'
    },
    issuedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'attendant'
    },
    returnDate: {
        type: Date,
        default: null
    },
    issuedDate: {
        type: Date,
        default: null
    }
}, {timestamps: true});

module.exports = mongoose.model('Book', bookSchema);