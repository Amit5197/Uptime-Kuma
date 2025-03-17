// script.js

// Signup function
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Store user data in localStorage (for simplicity)
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if username already exists
    if (users.find(user => user.username === username)) {
        alert('Username already exists');
        return;
    }

    // Add new user to the users array
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now log in.');
    window.location.href = 'index.html';  // Redirect to login page
});

// Login function
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username and password match any user
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'welcome.html';  // Redirect to a welcome page or dashboard
    } else {
        alert('Invalid username or password');
    }
});
