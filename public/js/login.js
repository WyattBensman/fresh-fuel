const loginFormHandler = async (event) => {
    event.preventDefault();

    // Ensure username & password inputs have correct IDs
    const username = document.querySelector('#usernameLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();

    if (username && password) {
        // Route Needs Confirmed
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // Make sure this is getting sent to the correct place
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

document
    // Ensure Form has #loginForm ID
    .querySelector('#loginForm')
    .addEventListener('submit', loginFormHandler);