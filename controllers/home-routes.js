const router = require("express").Router();
const Food = require("../model/Food");

// GET all foods for homepage
router.get("/", async (req, res) => {
  try {
    const dbFoodData = await Food.findAll().catch((err) => {
      res.json(err);
    });

    const foods = dbFoodData.map((food) => food.get({ true: true }));

    res.render("homepage", {
      foods,
      loggedIn: req.session.loggedIn,
    });
    // res.json(foods);
  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one food

router.get('/recipes/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    //if (!req.session.loggedIn) {
    //   res.redirect('/login');
    // } else { 
      // If the user is logged in, allow them to view the painting
      try {
        const dbFoodData = await Food.findByPk(req.params.id);
  
        const food = dbFoodData.get({ plain: true });
      
  
        res.render('food-details', { food, 
            //loggedIn: req.session.loggedIn 
        });
        // res.json(food);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

router.get("/food/:id", async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  //if (!req.session.loggedIn) {
  //   res.redirect('/login');
  // } else {
  // If the user is logged in, allow them to view the painting
  try {
    const dbFoodData = await Food.findByPk(req.params.id);

    const food = dbFoodData.get({ plain: true });
    console.log(food);

    res.render("food-details", {
      food,
      //loggedIn: req.session.loggedIn

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // Use Sequelize's `create()` method to add a row to the table
  // Similar to `INSERT INTO` in plain SQL
  Food.create({
    food_name: req.body.food_name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    //   cook_time: req.body.cook_time,
    //   image: req.body.image
  }).catch((err) => {
    res.json(err);
  });
});

router.get("/login", (req, res) => {
  try {
    // Show homepage view
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    // Show login view
    res.render("login");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error rendering Login");
  }
});

router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error rendering Login");
  }
});

router.get("/create-recipe", (req, res) => {
  try {
    res.render("createRecipe");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error rendering Login");
  }
});

router.get("/profile", async (req, res) => {
  try {
    // Grabs current user ID
    const userId = req.session.userId;

    // Find all Recipes that the user created
    const userRecipes = await Food.findAll({
      where: {
        author_id: userId,
      },
    });


  router.get('/edit-recipe/:id', async(req, res) => {
    try {
        const dbFoodData = await Food.findByPk(req.params.id);
  
        const food = dbFoodData.get({ plain: true });
  
        res.render('editRecipe', { food, 
            //loggedIn: req.session.loggedIn 
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });


    // Map Recipes to Objects
    const allUserRecipes = userRecipes.map((recipe) =>
      recipe.get({ plain: true })
    );


    res.render("profile", {
      userRecipes: allUserRecipes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
