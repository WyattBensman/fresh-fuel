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

// GET one food
router.get('/food/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
   /* if (!req.session.loggedIn) {
      res.redirect('/login');
    } else { */
      // If the user is logged in, allow them to view the painting
      try {
        const dbFoodData = await Food.findByPk(req.params.id);
  
        const food = dbFoodData.get({ plain: true });
  
        res.render('food-details', { food, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    //}
  });

router.post('/', (req, res) => {
    // Use Sequelize's `create()` method to add a row to the table
    // Similar to `INSERT INTO` in plain SQL
    Food.create({
      food_name: req.body.food_name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      cook_time: req.body.cook_time,
      image: req.body.image
    })
      .then((newMeal) => {
        // Send the newly created row as a JSON object
        res.json(newMeal);
      })
      .catch((err) => {
        res.json(err);
      });
  });

module.exports = router;