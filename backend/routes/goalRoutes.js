const express = require('express');
const { getGoals, setGoals, updateGoals, deleteGoals, getGoalById } = require('../controllers/goalController');

const router = express.Router();

router.route('/goals').get(getGoals).post(setGoals);

router.route('/goals/:id').put(updateGoals).delete(deleteGoals);

router.route('/goalbyid/:id',).get(getGoalById)

module.exports = router;