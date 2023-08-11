const createRecipeHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#recipeTitle').value.trim();
    const img = document.querySelector('#recipeImg').value.trim();
    const recipe = document.querySelector('#recipeRecipe').value.trim();
    const instructions = document.querySelector('#recipeInstructions').value.trim();

    if (title && content) {
        // Route needs confirmed
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ title, img, recipe, instructions }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // Make sure this is getting sent to the correct place
            document.location.replace('/');
        } else {
            alert('Failed to Create Recipe.');
        }
    }
};

document
    .querySelector('.createRecipeForm')
    .addEventListener('submit', createRecipeHandler);