const router = require('express').Router();
const { Food } = require('../../model');

// CREATE New Recipe
router.post('/', async (req, res) => {
  console.log(req.body);
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

router.put('/:id', async (req, res) => {
  console.log(req.body);
  try {
    const dish = await Food.update(
      {
        food_name: req.body.food_name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        // img: req.body.img,
        // cook_time: req.body.cookTime,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(dish);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

  module.exports = router;