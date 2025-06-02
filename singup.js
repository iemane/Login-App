const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const userData = { username, email, password };

    try {
        // إرسال البيانات إلى API
        const response = await fetch("https://6835bde2cd78db2058c2f337.mockapi.io/api/v1/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        if (!response.ok) throw new Error("Failed to create account");

        // حفظ بيانات المستخدم في الكوكيز
        document.cookie = `username=${username}; path=/`;
        document.cookie = `email=${email}; path=/`;
        document.cookie = `password=${password}; path=/`;

        // الانتقال إلى صفحة تسجيل الدخول بعد التسجيل الناجح
        window.location.href = "login.html";
    } catch (error) {
        alert("Error creating account: " + error.message);
    }
});
