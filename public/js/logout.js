const logout = async () => {
    // Route Needs Confirmed
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    // Make sure this is getting sent to the correct place
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out.');
    }
};

document
    // Ensure Logout button has #logout ID
    .querySelector('#logout')
    .addEventListener('click', logout);