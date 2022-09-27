const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler((req, res) => {
    res.send(`Get goals controller...`);
})

const setGoals = (req, res) => {
    if (!req.body.id) {
        throw new Error("Please require id field...!")
    }
    res.send(`ID: ${req.body.id}`);
}

const updateGoals = (req, res) => {
    res.send(`put method ${req.params.id}`);
}

const deleteGoals = (req, res) => {
    res.send(`delete method ${req.params.id}`);
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}