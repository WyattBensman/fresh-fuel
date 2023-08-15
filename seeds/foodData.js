const { Food } = require("../model");

const fooddata = [
  {
    id: 1,
    food_name: "Grilled Chicken Salad",
    author_id: null,
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
    cook_time: 30,
    category: "Lunch",
  },
  {
    id: 2,
    food_name: "Quinoa Stir-Fry",
    author_id: null,
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
    cook_time: 30,
    category: "Dinner",
  },
  {
    id: 3,
    food_name: "Greek Yogurt Parfait",
    author_id: null,
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
    cook_time: 30,
    category: "Breakfast",
  },
  {
    id: 4,
    food_name: "Oven-Roasted Vegetables",
    author_id: null,
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
    cook_time: 30,
    category: "Dinner",
  },
  {
    id: 5,
    food_name: "Black Bean and Avocado Wrap",
    author_id: null,
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
    cook_time: 30,
    category: "Lunch",
  },
  {
    id: 6,
    food_name: "Salmon and Asparagus Foil Pack",
    author_id: null,
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
    cook_time: 30,
    category: "Dinner",
  },
  {
    id: 7,
    food_name: "Mediterranean Chickpea Salad",
    author_id: null,
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
    cook_time: 30,
    category: "Dinner",
  },
  {
    id: 8,
    food_name: "Berry Spinach Smoothie",
    author_id: null,
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
    cook_time: 30,
    category: "Snacks",
  },
  {
    id: 9,
    food_name: "Veggie Omelette",
    author_id: null,
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
    cook_time: 30,
    category: "Breakfast",
  },
  {
    id: 10,
    food_name: "Roasted Sweet Potato Fries",
    author_id: null,
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
    cook_time: 30,
    category: "Snacks",
  },
  {
    id: 11,
    food_name: "Berry Chia Pudding",
    author_id: null,
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
    cook_time: 30,
    category: "Dessert",
  },
  {
    id: 12,
    food_name: "Turkey and Avocado Wrap",
    author_id: null,
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
    cook_time: 30,
    category: "Lunch",
  },
  {
    id: 13,
    food_name: "Cauliflower Fried Rice",
    author_id: null,
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
    cook_time: 30,
    category: "Dinner",
  },
  {
    id: 14,
    food_name: "Peanut Butter Banana Smoothie",
    author_id: null,
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
    cook_time: 30,
    category: "Snacks",
  },
  {
    id: 15,
    food_name: "Rainbow Veggie Salad",
    author_id: null,
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
    cook_time: 30,
    category: "Lunch",
  },
  {
    id: 16,
    food_name: "Lentil and Vegetable Soup",
    author_id: null,
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
    cook_time: 30,
    category: "Dinner",
  },
  {
    id: 17,
    food_name: "Oatmeal with Berries and Almonds",
    author_id: null,
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
    cook_time: 30,
    category: "Breakfast",
  },
  {
    id: 18,
    food_name: "Veggie and Hummus Wrap",
    author_id: null,
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
    cook_time: 30,
    category: "Lunch",
  },
  {
    id: 19,
    food_name: "Chickpea and Spinach Curry",
    author_id: null,
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
    cook_time: 30,
    category: "Dinner",
  },
  {
    id: 20,
    food_name: "Cucumber Avocado Gazpacho",
    author_id: null,
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
    cook_time: 30,
    category: "Dinner",
  },
  {
    id: 21,
    food_name: "Veggie and Tofu Stir-Fry",
    author_id: null,
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
    cook_time: 30,
    category: "Dinner",
  },
  {
    id: 22,
    food_name: "Berry Quinoa Parfait",
    author_id: null,
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
    cook_time: 30,
    category: "Breakfast",
  },
  {
    id: 23,
    food_name: "Chocolate Avocado Mousse",
    author_id: null,
    ingredients: [
      "Ripe avocados",
      "Cocoa powder",
      "Honey or maple syrup",
      "Vanilla extract",
      "Almond milk",
      "Fresh berries"
    ],
    instructions: [
      "1. In a blender, combine ripe avocados, cocoa powder, honey or maple syrup, and vanilla extract.",
      "2. Gradually add almond milk and blend until smooth and creamy.",
      "3. Chill the mousse in the refrigerator for at least an hour.",
      "4. Serve topped with fresh berries. Enjoy your guilt-free chocolate treat!"
    ],
    cook_time: 15,
    category: "Dessert"
  },
  {
    id: 24,
    food_name: "Fruit Salad with Citrus Mint Dressing",
    author_id: null,
    ingredients: [
      "Assorted fresh fruits (kiwi, pineapple, oranges, berries, etc.)",
      "Fresh mint leaves",
      "Lime juice",
      "Honey"
    ],
    instructions: [
      "1. Wash, peel, and chop a variety of fresh fruits.",
      "2. In a small bowl, mix lime juice, honey, and finely chopped mint leaves to create the dressing.",
      "3. Drizzle the dressing over the fruit salad and gently toss to combine.",
      "4. Chill the fruit salad before serving. Enjoy a refreshing and naturally sweet dessert!"
    ],
    cook_time: 20,
    category: "Dessert"
  },
  {
    id: 25,
    food_name: "Frozen Banana Bites",
    author_id: null,
    ingredients: [
      "Ripe bananas",
      "Dark chocolate (70% cocoa or higher)",
      "Peanut butter",
      "Chopped nuts (almonds, walnuts)",
      "Coconut flakes"
    ],
    instructions: [
      "1. Slice ripe bananas into bite-sized rounds.",
      "2. Spread a thin layer of peanut butter on half of the banana slices.",
      "3. Create banana sandwiches by placing another banana slice on top.",
      "4. Melt dark chocolate and dip each banana sandwich, then place on a parchment-lined tray.",
      "5. Sprinkle chopped nuts and coconut flakes over the chocolate-covered bananas.",
      "6. Freeze until the chocolate hardens. Enjoy your delicious and wholesome frozen treats!"
    ],
    cook_time: 30,
    category: "Dessert"
  },
  {
    id: 26,
    food_name: "Baked Apple Slices with Cinnamon",
    author_id: null,
    ingredients: [
      "Apples",
      "Cinnamon",
      "Honey or maple syrup",
      "Chopped nuts (walnuts, pecans)",
      "Greek yogurt"
    ],
    instructions: [
      "1. Preheat the oven to 350°F (175°C).",
      "2. Slice apples into thin rounds and arrange on a baking sheet.",
      "3. Sprinkle cinnamon and drizzle honey or maple syrup over the apple slices.",
      "4. Bake for about 15-20 minutes, until the apples are tender.",
      "5. Serve warm, topped with chopped nuts and a dollop of Greek yogurt. Enjoy a comforting and healthy dessert!"
    ],
    cook_time: 20,
    category: "Dessert"
  },
  {
    id: 27,
    food_name: "Yogurt and Berry Parfait",
    author_id: null,
    ingredients: [
      "Greek yogurt",
      "Mixed berries (blueberries, raspberries, strawberries)",
      "Honey or maple syrup",
      "Granola",
      "Chopped nuts (almonds, walnuts)",
      "Mint leaves"
    ],
    instructions: [
      "1. In a glass or bowl, layer Greek yogurt, mixed berries, and a drizzle of honey or maple syrup.",
      "2. Add a layer of granola and chopped nuts.",
      "3. Repeat the layers as desired.",
      "4. Top with fresh mint leaves. Enjoy a delightful and protein-rich yogurt parfait!"
    ],
    cook_time: 10,
    category: "Dessert"
  },
  {
    id: 28,
    food_name: "Coconut Mango Sorbet",
    author_id: null,
    ingredients: [
      "Ripe mangoes (peeled and diced)",
      "Coconut milk",
      "Lime juice",
      "Honey or agave syrup",
      "Toasted coconut flakes"
    ],
    instructions: [
      "1. Blend diced mangoes, coconut milk, lime juice, and honey or agave syrup until smooth.",
      "2. Pour the mixture into a shallow container and freeze for about 4 hours, stirring occasionally.",
      "3. Scoop the sorbet into bowls and top with toasted coconut flakes.",
      "4. Indulge in a tropical and naturally sweet coconut mango sorbet!"
    ],
    cook_time: 240,
    category: "Dessert"
  },
  {
    id: 29,
    food_name: "Dark Chocolate-Dipped Strawberries",
    author_id: null,
    ingredients: [
      "Fresh strawberries (with stems)",
      "Dark chocolate (70% cocoa or higher)",
      "Chopped nuts (pistachios, almonds)",
      "Shredded coconut"
    ],
    instructions: [
      "1. Wash and dry fresh strawberries, leaving the stems intact.",
      "2. Melt dark chocolate using a double boiler or microwave, stirring until smooth.",
      "3. Dip each strawberry into the melted chocolate, allowing excess to drip off.",
      "4. Immediately sprinkle chopped nuts or shredded coconut over the chocolate-coated strawberries.",
      "5. Place on a parchment-lined tray and refrigerate until the chocolate sets. Enjoy your elegant and antioxidant-rich dessert!"
    ],
    cook_time: 20,
    category: "Dessert"
  },
  {
    id: 30,
    food_name: "Choco-Nut Energy Bites",
    author_id: null,
    ingredients: [
      "Dates (pitted)",
      "Almond butter or peanut butter",
      "Cocoa powder",
      "Chia seeds",
      "Chopped nuts (cashews, almonds)",
      "Unsweetened shredded coconut"
    ],
    instructions: [
      "1. In a food processor, blend pitted dates, almond butter or peanut butter, cocoa powder, and chia seeds until well combined.",
      "2. Add chopped nuts and pulse briefly to incorporate.",
      "3. Roll the mixture into bite-sized balls.",
      "4. Roll each energy bite in unsweetened shredded coconut to coat.",
      "5. Refrigerate for about 30 minutes before enjoying these nutritious and energy-boosting treats!"
    ],
    cook_time: 30,
    category: "Dessert"
  },
  {
    id: 31,
    food_name: "Baked Pears with Cinnamon and Walnuts",
    author_id: null,
    ingredients: [
      "Ripe pears (halved and cored)",
      "Cinnamon",
      "Honey or maple syrup",
      "Chopped walnuts",
      "Greek yogurt"
    ],
    instructions: [
      "1. Preheat the oven to 375°F (190°C).",
      "2. Place pear halves in a baking dish, cut side up.",
      "3. Sprinkle cinnamon over the pears and drizzle with honey or maple syrup.",
      "4. Top each pear half with chopped walnuts.",
      "5. Bake for about 20-25 minutes, until the pears are tender and slightly caramelized.",
      "6. Serve warm, topped with a dollop of Greek yogurt. Enjoy a comforting and wholesome dessert!"
    ],
    cook_time: 25,
    category: "Dessert"
  },
  {
    id: 32,
    food_name: "Grilled Salmon with Quinoa and Roasted Vegetables",
    author_id: null,
    ingredients: [
      "Salmon fillet",
      "Lemon juice",
      "Olive oil",
      "Salt and pepper",
      "Cooked quinoa",
      "Assorted roasted vegetables (broccoli, carrots, bell peppers)",
      "Fresh herbs (parsley, thyme)",
    ],
    instructions: [
      "1. Marinate the salmon in lemon juice, olive oil, salt, and pepper.",
      "2. Grill the salmon until cooked through.",
      "3. Serve the grilled salmon over a bed of cooked quinoa and roasted vegetables.",
      "4. Garnish with fresh herbs. Enjoy a balanced and flavorful dinner!"
    ],
    cook_time: 25,
    category: "Dinner"
  },
  {
    id: 33,
    food_name: "Stir-Fried Tofu with Mixed Vegetables",
    author_id: null,
    ingredients: [
      "Firm tofu",
      "Assorted vegetables (broccoli, bell peppers, snap peas)",
      "Soy sauce",
      "Sesame oil",
      "Garlic and ginger (minced)",
      "Cooked brown rice",
      "Green onions",
    ],
    instructions: [
      "1. Press and cube the firm tofu.",
      "2. Heat sesame oil in a pan and sauté minced garlic and ginger.",
      "3. Add tofu and stir-fry until golden.",
      "4. Add mixed vegetables and cook until tender-crisp.",
      "5. Season with soy sauce and toss to combine.",
      "6. Serve over cooked brown rice, garnished with chopped green onions."
    ],
    cook_time: 20,
    category: "Dinner"
  },
  {
    id: 34,
    food_name: "Chicken and Vegetable Quinoa Bowl",
    author_id: null,
    ingredients: [
      "Boneless chicken breast",
      "Olive oil",
      "Salt and pepper",
      "Assorted vegetables (zucchini, carrots, onions)",
      "Cooked quinoa",
      "Lemon tahini dressing",
      "Fresh parsley",
    ],
    instructions: [
      "1. Season the chicken with olive oil, salt, and pepper. Grill or pan-fry until cooked.",
      "2. Sauté the assorted vegetables in olive oil until tender.",
      "3. Assemble the quinoa bowl with cooked quinoa, grilled chicken, sautéed vegetables.",
      "4. Drizzle with lemon tahini dressing and garnish with fresh parsley."
    ],
    cook_time: 30,
    category: "Dinner"
  },
  {
    id: 35,
    food_name: "Black Bean and Sweet Potato Tacos",
    author_id: null,
    ingredients: [
      "Black beans (canned or cooked)",
      "Sweet potatoes (roasted and mashed)",
      "Whole wheat tortillas",
      "Avocado slices",
      "Salsa",
      "Cilantro",
      "Lime wedges",
    ],
    instructions: [
      "1. Warm the whole wheat tortillas.",
      "2. Spread mashed sweet potatoes onto the tortillas.",
      "3. Top with black beans, avocado slices, salsa, and chopped cilantro.",
      "4. Squeeze lime juice over the tacos before folding and serving."
    ],
    cook_time: 40,
    category: "Dinner"
  },
  {
    id: 36,
    food_name: "Quinoa Stuffed Bell Peppers",
    author_id: null,
    ingredients: [
      "Bell peppers",
      "Cooked quinoa",
      "Lean ground turkey or tofu",
      "Onion (diced)",
      "Garlic (minced)",
      "Tomato sauce",
      "Spices (paprika, cumin)",
      "Shredded cheese (optional)",
    ],
    instructions: [
      "1. Cut the tops off bell peppers and remove seeds and membranes.",
      "2. In a skillet, cook lean ground turkey or tofu with diced onion and minced garlic.",
      "3. Mix cooked quinoa, cooked meat/tofu, tomato sauce, and spices.",
      "4. Stuff the bell peppers with the quinoa mixture and top with shredded cheese.",
      "5. Bake until peppers are tender and cheese is melted. Enjoy flavorful stuffed peppers!"
    ],
    cook_time: 40,
    category: "Dinner"
  },
  {
    id: 37,
    food_name: "Zucchini Noodles with Pesto",
    author_id: null,
    ingredients: [
      "Zucchini (spiraled into noodles)",
      "Fresh basil leaves",
      "Parmesan cheese",
      "Pine nuts",
      "Garlic",
      "Olive oil",
      "Cherry tomatoes",
    ],
    instructions: [
      "1. Blend basil, Parmesan cheese, pine nuts, garlic, and olive oil to make pesto sauce.",
      "2. Sauté zucchini noodles and cherry tomatoes in a pan until tender.",
      "3. Toss zucchini noodles with pesto sauce.",
      "4. Serve as a light and flavorful zucchini noodle dish."
    ],
    cook_time: 25,
    category: "Dinner"
  },
  {
    id: 38,
    food_name: "Teriyaki Salmon with Steamed Broccoli",
    author_id: null,
    ingredients: [
      "Salmon fillet",
      "Teriyaki sauce",
      "Cooked brown rice",
      "Broccoli florets",
      "Sesame seeds",
      "Green onions",
    ],
    instructions: [
      "1. Marinate the salmon in teriyaki sauce for a short time.",
      "2. Grill or pan-fry the salmon until cooked through.",
      "3. Steam broccoli florets until tender-crisp.",
      "4. Serve the teriyaki salmon over cooked brown rice, with steamed broccoli on the side.",
      "5. Garnish with sesame seeds and chopped green onions."
    ],
    cook_time: 20,
    category: "Dinner"
  },
  {
    id: 39,
    food_name: "Mushroom and Spinach Quinoa Risotto",
    author_id: null,
    ingredients: [
      "Cooked quinoa",
      "Mushrooms (sliced)",
      "Fresh spinach",
      "Onion (diced)",
      "Garlic (minced)",
      "Vegetable broth",
      "Parmesan cheese",
      "Fresh thyme",
    ],
    instructions: [
      "1. Sauté diced onion and minced garlic in a pan.",
      "2. Add sliced mushrooms and cook until tender.",
      "3. Add cooked quinoa and vegetable broth gradually, stirring until creamy.",
      "4. Stir in fresh spinach, Parmesan cheese, and fresh thyme.",
      "5. Cook until spinach is wilted and the risotto is creamy."
    ],
    cook_time: 30,
    category: "Dinner"
  },
  {
    id: 40,
    food_name: "Veggie and Lentil Stir-Fry",
    author_id: null,
    ingredients: [
      "Lentils (cooked)",
      "Assorted vegetables (carrots, bell peppers, snap peas)",
      "Soy sauce",
      "Ginger and garlic (minced)",
      "Sesame oil",
      "Cooked brown rice",
      "Sesame seeds",
    ],
    instructions: [
      "1. Sauté minced ginger and garlic in sesame oil.",
      "2. Add assorted vegetables and cook until tender-crisp.",
      "3. Add cooked lentils and soy sauce.",
      "4. Serve the lentil and vegetable stir-fry over cooked brown rice.",
      "5. Garnish with sesame seeds."
    ],
    cook_time: 25,
    category: "Dinner"
  },
  {
    id: 41,
    food_name: "Greek Yogurt and Veggie Dip",
    author_id: null,
    ingredients: [
      "Greek yogurt",
      "Assorted cut-up vegetables (carrots, cucumber, bell peppers)",
      "Fresh dill or parsley",
      "Garlic powder",
      "Lemon juice",
      "Salt and pepper",
    ],
    instructions: [
      "1. Mix Greek yogurt with fresh dill or parsley, garlic powder, lemon juice, salt, and pepper.",
      "2. Serve the dip with assorted cut-up vegetables.",
      "3. Enjoy a creamy and protein-rich snack!"
    ],
    cook_time: 10,
    category: "Snack"
  },
  {
    id: 42,
    food_name: "Apple Slices with Nut Butter",
    author_id: null,
    ingredients: [
      "Fresh apples (sliced)",
      "Almond butter or peanut butter",
      "Chia seeds or flaxseeds",
      "Cinnamon",
      "Honey or maple syrup",
    ],
    instructions: [
      "1. Spread almond butter or peanut butter on apple slices.",
      "2. Sprinkle chia seeds or flaxseeds and cinnamon over the nut butter.",
      "3. Drizzle with a touch of honey or maple syrup.",
      "4. Enjoy a satisfying and nutrient-packed apple snack!"
    ],
    cook_time: 5,
    category: "Snack"
  },
  {
    id: 43,
    food_name: "Trail Mix Energy Bites",
    author_id: null,
    ingredients: [
      "Rolled oats",
      "Almond butter or peanut butter",
      "Honey or agave syrup",
      "Dark chocolate chips",
      "Chopped nuts (walnuts, almonds)",
      "Dried cranberries or raisins",
    ],
    instructions: [
      "1. Mix rolled oats, almond butter or peanut butter, honey or agave syrup.",
      "2. Add dark chocolate chips, chopped nuts, and dried cranberries or raisins.",
      "3. Roll the mixture into bite-sized balls.",
      "4. Refrigerate until firm. Enjoy convenient and energy-boosting bites!"
    ],
    cook_time: 20,
    category: "Snack"
  },
  {
    id: 44,
    food_name: "Cucumber Hummus Bites",
    author_id: null,
    ingredients: [
      "Cucumber slices",
      "Hummus",
      "Cherry tomatoes",
      "Fresh basil leaves",
      "Olive oil",
      "Balsamic vinegar (optional)",
    ],
    instructions: [
      "1. Top cucumber slices with a dollop of hummus.",
      "2. Add a halved cherry tomato and a fresh basil leaf on top.",
      "3. Drizzle with olive oil and balsamic vinegar, if desired.",
      "4. Enjoy a light and refreshing hummus-cucumber snack!"
    ],
    cook_time: 15,
    category: "Snack"
  },
  {
    id: 45,
    food_name: "Homemade Popcorn with Herbs",
    author_id: null,
    ingredients: [
      "Popcorn kernels",
      "Olive oil",
      "Nutritional yeast",
      "Dried herbs (thyme, rosemary)",
      "Garlic powder",
      "Salt",
    ],
    instructions: [
      "1. Pop the popcorn kernels using a stovetop or air popper.",
      "2. Drizzle with olive oil and toss with nutritional yeast, dried herbs, garlic powder, and salt.",
      "3. Shake to coat evenly. Enjoy a flavorful and guilt-free popcorn snack!"
    ],
    cook_time: 10,
    category: "Snack"
  },
  {
    id: 46,
    food_name: "Rice Cake Delight",
    author_id: null,
    ingredients: [
      "Rice cakes (plain or lightly salted)",
      "Nut butter (almond, peanut, etc.)",
      "Sliced bananas",
      "Chia seeds",
      "Honey or agave syrup",
    ],
    instructions: [
      "1. Spread nut butter on rice cakes.",
      "2. Top with sliced bananas and a sprinkle of chia seeds.",
      "3. Drizzle with a touch of honey or agave syrup.",
      "4. Enjoy a crunchy and satisfying rice cake snack!"
    ],
    cook_time: 5,
    category: "Snack"
  },
  {
    id: 47,
    food_name: "Crispy Roasted Chickpeas",
    author_id: null,
    ingredients: [
      "Canned chickpeas (drained and rinsed)",
      "Olive oil",
      "Paprika",
      "Cumin",
      "Garlic powder",
      "Salt",
    ],
    instructions: [
      "1. Preheat the oven to 400°F (200°C).",
      "2. Toss chickpeas with olive oil, paprika, cumin, garlic powder, and salt.",
      "3. Spread in a single layer on a baking sheet and bake for 20-25 minutes, until crispy.",
      "4. Enjoy a protein-packed and crunchy roasted chickpea snack!"
    ],
    cook_time: 25,
    category: "Snack"
  },
  {
    id: 48,
    food_name: "Nutty Apple Slices",
    author_id: null,
    ingredients: [
      "Fresh apples (sliced)",
      "Almond butter or cashew butter",
      "Chopped mixed nuts (almonds, walnuts)",
      "Ground cinnamon",
      "Honey or maple syrup",
    ],
    instructions: [
      "1. Spread almond butter or cashew butter on apple slices.",
      "2. Sprinkle chopped mixed nuts and ground cinnamon over the nut butter.",
      "3. Drizzle with a touch of honey or maple syrup.",
      "4. Enjoy a satisfying and nutrient-rich nutty apple snack!"
    ],
    cook_time: 5,
    category: "Snack"
  },
  {
    id: 49,
    food_name: "Mediterranean Veggie Medley",
    author_id: null,
    ingredients: [
      "Cherry tomatoes",
      "Cucumber (sliced)",
      "Baby carrots",
      "Hummus",
      "Kalamata olives",
      "Feta cheese (optional)",
    ],
    instructions: [
      "1. Arrange cherry tomatoes, cucumber slices, and baby carrots on a plate.",
      "2. Serve with a side of hummus for dipping.",
      "3. Garnish with Kalamata olives and crumbled feta cheese, if desired.",
      "4. Enjoy a fresh and savory Mediterranean-inspired snack!"
    ],
    cook_time: 10,
    category: "Snack"
  },
  {
    id: 50,
    food_name: "Veggie Wraps with Hummus",
    author_id: null,
    ingredients: [
      "Whole wheat tortillas",
      "Hummus",
      "Assorted sliced vegetables (bell peppers, carrots, spinach)",
      "Sprouts or microgreens",
      "Lemon juice",
      "Salt and pepper",
    ],
    instructions: [
      "1. Spread hummus on whole wheat tortillas.",
      "2. Layer sliced vegetables and sprouts or microgreens on top.",
      "3. Drizzle with lemon juice, and season with salt and pepper.",
      "4. Roll up the tortillas and secure with toothpicks. Enjoy a refreshing and veggie-packed wrap snack!"
    ],
    cook_time: 15,
    category: "Snack"
  },
];

const seedFood = () => Food.bulkCreate(fooddata);

module.exports = seedFood;
