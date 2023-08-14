const router = require('express').Router();
const Food = require('../model/Food');
console.log(Food);

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



router.post('/', (req, res) => {
    // Use Sequelize's `create()` method to add a row to the table
    // Similar to `INSERT INTO` in plain SQL
    Food.create({
      food_name: req.body.food_name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      
    })
      .then((newMeal) => {
        // Send the newly created row as a JSON object
        res.json(newMeal);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get('/login', (req,res) => {
    try {
      res.render('login');
  } catch (error) {
      console.error(error);
      res.status(500).send('Error rendering Login');
  }
  })

  router.get('/signup', (req, res) => {
    try {
      res.render('signup');
  } catch (error) {
      console.error(error);
      res.status(500).send('Error rendering Login');
  }
  })


  

module.exports = router;