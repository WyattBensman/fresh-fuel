const signupFormHandler = async (event) => {
    event.preventDefault();

    // Ensure username & password inputs have correct IDs
    const username = document.querySelector('#usernameSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();

    if (username && password) {
        // Route Needs Confirmed
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // Make sure this is getting sent to the correct place
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

document
    // Ensure Form has #signupForm ID
    .querySelector('#signupForm')
    .addEventListener('submit', signupFormHandler);