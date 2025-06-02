document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Fetch users from the API
    const res = await fetch('https://6835bde2cd78db2058c2f337.mockapi.io/api/v1/users');
    const users = await res.json();

    // Check if the user exists
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Save user info in cookies
        document.cookie = `email=${user.email}`;
        document.cookie = `username=${user.name}`;
        document.cookie = `loggedIn=true`;

        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        // If email not found in API, go to signup
        const exists = users.some(u => u.email === email);
        if (!exists) {
            alert("Email not registered. Redirecting to sign up...");
            setTimeout(() => {
                window.location.href = "singup.html";
            }, 1000);
        } else {
            alert("Invalid email or password.");
        }
    }
});
