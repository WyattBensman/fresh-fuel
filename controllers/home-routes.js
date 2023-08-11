const router = require('express').Router();
const { Food } = require('../model/Food');

// GET all foods for homepage
router.get('/', async (req, res) => {
  try {
    const dbFoodData = await Food.findAll().catch((err) => { 
        res.json(err);
      });

    const foods = dbFoodData.map((food) =>
      food.get({ plain: true })
    );

    res.render('homepage', {
      foods,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;