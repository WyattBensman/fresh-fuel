async function editFormHandler(event) {
    event.preventDefault();
    const food_name = document.querySelector('#food_name').value;
    const ingredients = document.querySelector('#ingredients').value;
    const instructions = document.querySelector('#instructions').value;
  
    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch(`api/recipes/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        food_name,
        ingredients,
        instructions,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace(`/recipes/${id}`);
    } else {
      alert('Failed to edit dish');
    }
  }
  
  document.querySelector('.edit-food-form').addEventListener('submit', editFormHandler);

  