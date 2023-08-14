const { Food } = require("../model");

const fooddata = [
  {
    id: 1,
    food_name: "Grilled Chicken Salad",
    ingredients: [
      "Boneless, skinless chicken breasts",
      "Mixed salad greens",
      "Cherry tomatoes",
      "Cucumber",
      "Red onion",
      "Olive oil",
      "Lemon juice",
      "Salt and pepper",
    ],
    instructions: [
      "1. Season the chicken breasts with salt and pepper. Grill until cooked through.",
      "2. Chop the salad greens, cherry tomatoes, cucumber, and red onion.",
      "3. Slice the grilled chicken and place it on top of the salad.",
      "4. Drizzle with olive oil and lemon juice. Toss to combine. Enjoy!",
    ],
  },
  {
    id: 2,
    food_name: "Quinoa Stir-Fry",
    ingredients: [
      "Quinoa",
      "Assorted vegetables (bell peppers, broccoli, carrots, snap peas, etc.)",
      "Firm tofu or cooked chicken (optional)",
      "Soy sauce",
      "Sesame oil",
      "Garlic",
      "Ginger",
      "Sesame seeds",
    ],
    instructions: [
      "1. Cook quinoa according to package instructions.",
      "2. Heat sesame oil in a pan. Add minced garlic and ginger.",
      "3. Add chopped vegetables and stir-fry until crisp-tender.",
      "4. If using tofu or chicken, add and cook until heated through.",
      "5. Stir in cooked quinoa, soy sauce, and sesame seeds. Mix well and serve.",
    ],
  },
  {
    id: 3,
    food_name: "Greek Yogurt Parfait",
    ingredients: [
      "Greek yogurt",
      "Mixed berries (strawberries, blueberries, raspberries)",
      "Honey or maple syrup",
      "Granola",
      "Nuts (almonds, walnuts)",
      "Chia seeds",
    ],
    instructions: [
      "1. In a glass or bowl, layer Greek yogurt, mixed berries, and a drizzle of honey or maple syrup.",
      "2. Add a layer of granola and chopped nuts.",
      "3. Repeat the layers as desired.",
      "4. Top with chia seeds and more berries. Enjoy your parfait!",
    ],
  },
  {
    id: 4,
    food_name: "Oven-Roasted Vegetables",
    ingredients: [
      "Assorted vegetables (zucchini, bell peppers, carrots, broccoli, etc.)",
      "Olive oil",
      "Garlic powder",
      "Dried herbs (thyme, rosemary, oregano)",
      "Salt and pepper",
    ],
    instructions: [
      "1. Preheat the oven to 400°F (200°C).",
      "2. Cut the vegetables into bite-sized pieces.",
      "3. Toss the vegetables with olive oil, garlic powder, dried herbs, salt, and pepper.",
      "4. Spread the vegetables on a baking sheet in a single layer.",
      "5. Roast in the oven for 20-25 minutes, stirring occasionally, until tender and slightly caramelized. Serve as a side dish or over quinoa.",
    ],
  },
  {
    id: 5,
    food_name: "Black Bean and Avocado Wrap",
    ingredients: [
      "Whole wheat tortilla",
      "Canned black beans (rinsed and drained)",
      "Avocado (sliced)",
      "Red onion (sliced)",
      "Bell peppers (sliced)",
      "Baby spinach",
      "Lime juice",
      "Cumin",
      "Salt and pepper",
    ],
    instructions: [
      "1. In a bowl, mash half of the black beans with lime juice, cumin, salt, and pepper.",
      "2. Lay out the tortilla and spread the mashed black beans onto it.",
      "3. Top with avocado slices, red onion, bell peppers, and baby spinach.",
      "4. Add the remaining whole black beans.",
      "5. Roll up the tortilla, tuck in the sides, and enjoy your flavorful wrap!",
    ],
  },
  {
    id: 6,
    food_name: "Salmon and Asparagus Foil Pack",
    ingredients: [
      "Salmon fillet",
      "Asparagus spears",
      "Lemon slices",
      "Olive oil",
      "Garlic",
      "Fresh dill",
      "Salt and pepper",
    ],
    instructions: [
      "1. Preheat the oven to 400°F (200°C).",
      "2. Place a salmon fillet on a piece of aluminum foil.",
      "3. Arrange asparagus spears and lemon slices around the salmon.",
      "4. Drizzle with olive oil, minced garlic, chopped dill, salt, and pepper.",
      "5. Seal the foil packet and bake for 15-20 minutes, until salmon is cooked through and asparagus is tender.",
    ],
  },
  {
    id: 7,
    food_name: "Mediterranean Chickpea Salad",
    ingredients: [
      "Canned chickpeas (rinsed and drained)",
      "Cucumber",
      "Cherry tomatoes",
      "Red onion",
      "Kalamata olives",
      "Feta cheese",
      "Fresh parsley",
      "Olive oil",
      "Lemon juice",
      "Dried oregano",
      "Salt and pepper",
    ],
    instructions: [
      "1. In a large bowl, combine chickpeas, chopped cucumber, halved cherry tomatoes, diced red onion, sliced olives, crumbled feta, and chopped parsley.",
      "2. In a small bowl, whisk together olive oil, lemon juice, dried oregano, salt, and pepper.",
      "3. Pour the dressing over the salad and toss to combine. Serve as a refreshing Mediterranean dish.",
    ],
  },
  {
    id: 8,
    food_name: "Berry Spinach Smoothie",
    ingredients: [
      "Fresh spinach leaves",
      "Mixed berries (strawberries, blueberries, raspberries)",
      "Banana",
      "Greek yogurt",
      "Almond milk",
      "Honey or maple syrup",
    ],
    instructions: [
      "1. In a blender, combine spinach, mixed berries, sliced banana, Greek yogurt, almond milk, and a drizzle of honey or maple syrup.",
      "2. Blend until smooth and creamy. Adjust sweetness and consistency as needed by adding more honey, milk, or yogurt.",
      "3. Pour into a glass and enjoy your nutritious and vibrant smoothie!",
    ],
  },
  {
    id: 9,
    food_name: "Veggie Omelette",
    ingredients: [
      "Eggs",
      "Bell peppers (diced)",
      "Tomato (diced)",
      "Mushrooms (sliced)",
      "Spinach",
      "Cheddar cheese (shredded)",
      "Salt and pepper",
      "Cooking oil or butter",
    ],
    instructions: [
      "1. In a bowl, beat eggs and season with salt and pepper.",
      "2. Heat oil or butter in a pan over medium heat.",
      "3. Add bell peppers, tomato, and mushrooms. Sauté until tender.",
      "4. Add spinach and cook until wilted.",
      "5. Pour beaten eggs over the veggies and let them set.",
      "6. Sprinkle shredded cheese over one half of the omelette.",
      "7. Carefully fold the other half over the cheese. Cook until eggs are fully set.",
      "8. Slide the omelette onto a plate and enjoy your protein-packed breakfast!",
    ],
  },
  {
    id: 10,
    food_name: "Roasted Sweet Potato Fries",
    ingredients: [
      "Sweet potatoes (peeled and cut into fries)",
      "Olive oil",
      "Paprika",
      "Garlic powder",
      "Salt and pepper",
    ],
    instructions: [
      "1. Preheat the oven to 425°F (220°C).",
      "2. In a bowl, toss sweet potato fries with olive oil, paprika, garlic powder, salt, and pepper.",
      "3. Spread the fries on a baking sheet in a single layer.",
      "4. Roast in the oven for 20-25 minutes, turning halfway through, until crispy and golden.",
      "5. Serve as a delicious and healthier alternative to regular fries.",
    ],
  },
  {
    id: 11,
    food_name: "Berry Chia Pudding",
    ingredients: [
      "Chia seeds",
      "Almond milk",
      "Mixed berries (strawberries, blueberries, raspberries)",
      "Honey or maple syrup",
      "Vanilla extract",
    ],
    instructions: [
      "1. In a jar or container, combine chia seeds, almond milk, a drizzle of honey or maple syrup, and a splash of vanilla extract.",
      "2. Stir well to make sure chia seeds are evenly distributed.",
      "3. Refrigerate for a few hours or overnight, allowing the chia seeds to absorb the liquid and create a pudding-like texture.",
      "4. Before serving, layer the chia pudding with mixed berries in a glass. Enjoy a nutritious and satisfying dessert or breakfast!",
    ],
  },
  {
    id: 12,
    food_name: "Turkey and Avocado Wrap",
    ingredients: [
      "Whole wheat tortilla",
      "Sliced turkey breast",
      "Avocado (sliced)",
      "Lettuce",
      "Tomato (sliced)",
      "Mustard or hummus",
      "Salt and pepper",
    ],
    instructions: [
      "1. Lay out the whole wheat tortilla.",
      "2. Spread a layer of mustard or hummus onto the tortilla.",
      "3. Place sliced turkey breast, avocado, lettuce, and tomato on top.",
      "4. Season with salt and pepper.",
      "5. Roll up the tortilla, tuck in the sides, and secure with a toothpick if needed. Enjoy your protein-packed wrap!",
    ],
  },
  {
    id: 13,
    food_name: "Cauliflower Fried Rice",
    ingredients: [
      "Cauliflower (riced)",
      "Assorted vegetables (peas, carrots, corn, bell peppers)",
      "Eggs (beaten)",
      "Soy sauce",
      "Sesame oil",
      "Garlic",
      "Ginger",
      "Green onions",
      "Salt and pepper",
    ],
    instructions: [
      "1. Heat sesame oil in a pan. Add minced garlic and ginger.",
      "2. Add chopped vegetables and stir-fry until tender.",
      "3. Push the veggies to one side and pour beaten eggs into the other side. Scramble the eggs.",
      "4. Add cauliflower rice to the pan and stir-fry.",
      "5. Season with soy sauce, salt, and pepper.",
      "6. Top with chopped green onions and a drizzle of sesame oil. Serve your flavorful cauliflower fried rice!",
    ],
  },
  {
    id: 14,
    food_name: "Peanut Butter Banana Smoothie",
    ingredients: [
      "Banana",
      "Natural peanut butter",
      "Greek yogurt",
      "Almond milk",
      "Honey or maple syrup",
      "Oats",
      "Cinnamon",
    ],
    instructions: [
      "1. In a blender, combine sliced banana, peanut butter, Greek yogurt, almond milk, a drizzle of honey or maple syrup, oats, and a pinch of cinnamon.",
      "2. Blend until smooth and creamy.",
      "3. Pour into a glass and enjoy your protein-rich and satisfying smoothie!",
    ],
  },
  {
    id: 15,
    food_name: "Rainbow Veggie Salad",
    ingredients: [
      "Baby spinach",
      "Red bell pepper (sliced)",
      "Yellow bell pepper (sliced)",
      "Orange carrot (shredded)",
      "Purple cabbage (shredded)",
      "Cherry tomatoes",
      "Cucumber (sliced)",
      "Red onion (sliced)",
      "Balsamic vinaigrette",
    ],
    instructions: [
      "1. In a large bowl, combine baby spinach, sliced bell peppers, shredded carrot and cabbage, cherry tomatoes, sliced cucumber, and red onion.",
      "2. Toss the salad with your choice of balsamic vinaigrette dressing.",
      "3. Serve as a vibrant and nutrient-packed meal or side dish.",
    ],
  },
  {
    id: 16,
    food_name: "Lentil and Vegetable Soup",
    ingredients: [
      "Brown lentils",
      "Assorted vegetables (carrots, celery, zucchini, etc.)",
      "Onion",
      "Garlic",
      "Vegetable broth",
      "Tomato paste",
      "Herbs (thyme, bay leaves)",
      "Salt and pepper",
    ],
    instructions: [
      "1. Sauté diced onion and minced garlic in a pot.",
      "2. Add diced vegetables and cook until slightly softened.",
      "3. Rinse lentils and add them to the pot along with vegetable broth and tomato paste.",
      "4. Add herbs, salt, and pepper. Simmer until lentils and veggies are tender.",
      "5. Remove bay leaves and thyme stems before serving. Enjoy your hearty and nutritious soup!",
    ],
  },
  {
    id: 17,
    food_name: "Oatmeal with Berries and Almonds",
    ingredients: [
      "Old-fashioned oats",
      "Almond milk",
      "Mixed berries (blueberries, raspberries, blackberries)",
      "Sliced almonds",
      "Honey or maple syrup",
      "Cinnamon",
    ],
    instructions: [
      "1. In a pot, combine oats and almond milk. Cook according to oatmeal package instructions.",
      "2. Once cooked, top with mixed berries, sliced almonds, a drizzle of honey or maple syrup, and a sprinkle of cinnamon.",
      "3. Stir and enjoy your warm and satisfying oatmeal bowl!",
    ],
  },
  {
    id: 18,
    food_name: "Veggie and Hummus Wrap",
    ingredients: [
      "Whole wheat tortilla",
      "Hummus",
      "Baby spinach",
      "Cucumber (sliced)",
      "Red bell pepper (sliced)",
      "Carrot (shredded)",
      "Red onion (sliced)",
      "Feta cheese (crumbled)",
      "Salt and pepper",
    ],
    instructions: [
      "1. Spread a layer of hummus onto the whole wheat tortilla.",
      "2. Add baby spinach, sliced cucumber, sliced red bell pepper, shredded carrot, and red onion.",
      "3. Sprinkle crumbled feta cheese over the veggies.",
      "4. Season with salt and pepper.",
      "5. Roll up the tortilla, tuck in the sides, and enjoy your flavorful and nutrient-packed wrap!",
    ],
  },
  {
    id: 19,
    food_name: "Chickpea and Spinach Curry",
    ingredients: [
      "Canned chickpeas (rinsed and drained)",
      "Fresh spinach leaves",
      "Onion",
      "Garlic",
      "Ginger",
      "Curry powder",
      "Coconut milk",
      "Tomato sauce",
      "Lemon juice",
      "Cilantro",
    ],
    instructions: [
      "1. Sauté diced onion, minced garlic, and grated ginger in a pot.",
      "2. Add curry powder and cook briefly.",
      "3. Pour in coconut milk and tomato sauce. Simmer for a few minutes.",
      "4. Add rinsed chickpeas and fresh spinach. Cook until spinach wilts.",
      "5. Finish with a squeeze of lemon juice and chopped cilantro.",
      "6. Serve with rice or naan for a delicious and satisfying curry!",
    ],
  },
  {
    id: 20,
    food_name: "Cucumber Avocado Gazpacho",
    ingredients: [
      "Cucumber (peeled and chopped)",
      "Avocado",
      "Green bell pepper (chopped)",
      "Red onion (chopped)",
      "Garlic",
      "Vegetable broth",
      "Lemon juice",
      "Fresh parsley",
      "Salt and pepper",
    ],
    instructions: [
      "1. In a blender, combine chopped cucumber, avocado, chopped green bell pepper, chopped red onion, minced garlic, and vegetable broth.",
      "2. Blend until smooth and creamy.",
      "3. Season with lemon juice, chopped fresh parsley, salt, and pepper.",
      "4. Chill in the fridge before serving as a refreshing and nutritious cold soup.",
    ],
  },
  {
    id: 21,
    food_name: "Veggie and Tofu Stir-Fry",
    ingredients: [
      "Firm tofu (cubed)",
      "Assorted vegetables (broccoli, snap peas, bell peppers, etc.)",
      "Soy sauce",
      "Sesame oil",
      "Garlic",
      "Ginger",
      "Cornstarch",
      "Rice or noodles",
    ],
    instructions: [
      "1. Press and drain cubed tofu.",
      "2. Heat sesame oil in a pan. Add minced garlic and grated ginger.",
      "3. Add cubed tofu and stir-fry until golden.",
      "4. Add chopped vegetables and stir-fry until crisp-tender.",
      "5. In a small bowl, mix soy sauce and cornstarch.",
      "6. Pour the soy sauce mixture over the stir-fry and cook until thickened.",
      "7. Serve over rice or noodles for a tasty and protein-rich meal!",
    ],
  },
  {
    id: 22,
    food_name: "Berry Quinoa Parfait",
    ingredients: [
      "Cooked quinoa",
      "Mixed berries (strawberries, blueberries, raspberries)",
      "Yogurt (Greek or non-dairy)",
      "Honey or maple syrup",
      "Nuts (pecans, almonds)",
      "Mint leaves",
    ],
    instructions: [
      "1. In a glass or bowl, layer cooked quinoa, mixed berries, and a dollop of yogurt.",
      "2. Drizzle with honey or maple syrup.",
      "3. Add another layer of quinoa, berries, and yogurt.",
      "4. Top with chopped nuts and fresh mint leaves.",
      "5. Enjoy a protein-packed and fruity quinoa parfait!",
    ],
  },
];

const seedFood = () => Food.bulkCreate(fooddata);

module.exports = seedFood;
