const editFormHandler = async (event, postId) => {
    event.preventDefault();

    const title = document.querySelector('#recipeTitle').value.trim();
    const img = document.querySelector('#recipeImg').value.trim();
    const recipe = document.querySelector('#recipeRecipe').value.trim();
    const instructions = document.querySelector('#recipeInstructions').value.trim();

    if (title && content) {
        // Change Route
        const response = await fetch(`/api/recipes/${recipeId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, img, recipe, instructions }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to edit recipe.');
        }
    }
};

const deleteFormHandler = async (event, postId) => {
    event.preventDefault();

    // Change Route
    const response = await fetch(`/api/recipes/${recipeId}`, {
        method: 'DELETE',
        body: JSON.stringify({ title, img, recipe, instructions }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to delete recipe.');
    }
};

// THE DISCARD CHANGES BUTTON WILL JUST NEED TO REDIRECT THE USER BACK TO THE PROFILE VIEW

document
    // Ensure Form has #editRecipeForm ID
    .querySelector('#editRecipeForm')
    .addEventListener('submit', editFormHandler);

document
    // Ensure Button has #deleteRecipeButton ID
    .querySelector('#deleteRecipeButton')
    .addEventListener('click', deleteFormHandler);