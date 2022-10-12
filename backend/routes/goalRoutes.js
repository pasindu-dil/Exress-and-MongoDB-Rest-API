const express = require('express');
const { getGoals, setGoals, updateGoals, deleteGoals, getGoalById } = require('../controllers/goalController');

const { protect } = require('../middleware/authMiddleware')

const router = express.Router();

router.route('/goals').get(protect, getGoals).post(protect, setGoals);

router.route('/goals/:id').put(protect, updateGoals).delete(protect, deleteGoals);

router.route('/goalbyid/:id',).get(protect, getGoalById)

module.exports = router;