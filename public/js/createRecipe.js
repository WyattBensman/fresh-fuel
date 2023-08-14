const createRecipeHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#dishTitle").value.trim();
  const img = document.querySelector("#dishImg").value.trim();
  const ingredients = document.querySelector(".ingredient").value.trim();
  const instructions = document.querySelector("#recipeInstructions").value.trim();
  const cookTime = document.querySelector('#cookTime').value.trim();

  if (title && img && ingredients && cookTime) {
    // Route needs confirmed
    const response = await fetch("/api/recipes", {
      method: "POST",
      body: JSON.stringify({ title, img, recipe, instructions }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // Make sure this is getting sent to the correct place
      document.location.replace("/");
    } else {
      alert("Failed to Create Recipe.");
    }
  }
};

const addIngredientHandler = async (event) => {
    event.preventDefault();
  
    // Instruction Container
    const ingredientsContainer = document.querySelector(".ingredientsContainer");
  
      // Create Div
      const newDiv = document.createElement('div');
      newDiv.classList.add('input-group', 'mt-2');
  
      // Input
      const newInput = document.createElement("input");
      newInput.type = 'text';
      newInput.classList.add("form-control");
      newDiv.appendChild(newInput);
  
      // Remove Button
      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.classList.add('input-group-text', 'deleteBtn');
      removeBtn.textContent = 'X';
      newDiv.appendChild(removeBtn);
  
      // Append Div to Instruction Container
      ingredientsContainer.appendChild(newDiv)
  };

const addInstuctionHandler = async (event) => {
  event.preventDefault();

  // Instruction Container
  const instructionContainer = document.querySelector(".instructionsContainer");

    // Create Div
    const newDiv = document.createElement('div');
    newDiv.classList.add('input-group', 'mt-2');

    // Input
    const newInput = document.createElement("input");
    newInput.type = 'text';
    newInput.classList.add("form-control");
    newDiv.appendChild(newInput);

    // Remove Button
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.classList.add('input-group-text', 'deleteBtn');
    removeBtn.textContent = 'X';
    newDiv.appendChild(removeBtn);

    // Append Div to Instruction Container
    instructionContainer.appendChild(newDiv)
};

// Remove Line Handler
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteBtn')) {
        const parentElement = event.target.closest('.input-group');
        if (parentElement) {
            parentElement.remove();
        }
    }
});

// Add Ingredient Line
document
  .querySelector("#addIngredient")
  .addEventListener("click", addIngredientHandler);

// Add Instruction Line
document
    .querySelector('#addInstruction')
    .addEventListener('click', addInstuctionHandler)

// Create Recipe Form Submit
document
  .querySelector(".createRecipeForm")
  .addEventListener("submit", createRecipeHandler);
