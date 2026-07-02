const libraryAttendant = require('../models/attendant');
const asyncHandler = require('../utils/asyncHandler');
const createAttendant = asyncHandler(async (req, res) => {
    const attendant = await libraryAttendant.create(req.body);
    res.status(201).json(attendant);
});

const getAllAttendants = asyncHandler(async (req, res) => {
    const attendants = await libraryAttendant.find();
    res.status(200).json(attendants);
});

const getAttendantById = asyncHandler(async (req, res) => {
    const attendant = await libraryAttendant.findById(req.params.id);
    if (!attendant) {
        res.status(404);
        throw new Error('Attendant not found');
    }
    res.status(200).json(attendant);
});

module.exports = {
    createAttendant,
    getAllAttendants,
    getAttendantById
};