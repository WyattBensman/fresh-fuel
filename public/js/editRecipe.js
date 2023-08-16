async function editFormHandler(event){
//const editFormHandler = async (event, postId) => {
    event.preventDefault();

    const title = document.querySelector('#dishTitle').value.trim();
    const img = document.querySelector('#dishImg').value.trim();
    const recipe = document.querySelector('#dishIngredients').value.trim();
    const instructions = document.querySelector('#dishInstruction').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

   // if (title && content) {
        // Change Route
        const response = await fetch(`/api/recipes/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, img, recipe, instructions }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/recipes/${id}`);
        } else {
            alert('Failed to edit recipe.');
        }
   // }
};
document.querySelector('.edit-dish-form').addEventListener('submit', editFormHandler);

// const deleteFormHandler = async (event, postId) => {
//     event.preventDefault();

//     // Change Route
//     const response = await fetch(`/api/recipes/${id}`, {
//         method: 'DELETE',
//         body: JSON.stringify({ title, img, recipe, instructions }),
//         headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//         document.location.replace(`/recipes/${id}`);
//     } else {
//         alert('Failed to delete recipe.');
//     }
// };

// THE DISCARD CHANGES BUTTON WILL JUST NEED TO REDIRECT THE USER BACK TO THE PROFILE VIEW

// document
//     // Ensure Form has #editRecipeForm ID
//     .querySelector('#editRecipeForm')
//     .addEventListener('submit', editFormHandler);

// document
//     // Ensure Button has #deleteRecipeButton ID
//     .querySelector('#deleteRecipeButton')
//     .addEventListener('click', deleteFormHandler);