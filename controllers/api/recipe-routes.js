const router = require('express').Router();
const Food = require('../../model/User');

// CREATE New Recipe
router.post('/', async (req, res) => {
    try {
      const dbRecipeData = await Food.create({
        food_name: req.body.title,
        img: req.body.img,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        cook_time: req.body.cookTime,
      });

      res.status(200).json(dbRecipeData);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;