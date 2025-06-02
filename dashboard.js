// قراءة الكوكيز
function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

window.onload = () => {
    const isLoggedIn = getCookie('loggedIn');
    const email = getCookie('email');
    const username = getCookie('username');

    if (!isLoggedIn || !email || !username) {
        // إذا لم يكن المستخدم مسجلاً الدخول، أعد التوجيه إلى login
        window.location.href = 'login.html';
    } else {
        // عرض معلومات المستخدم
        document.getElementById('email').textContent = email;
        document.getElementById('username').textContent = username;
    }

    // تسجيل الخروج
    document.getElementById('logoutBtn').addEventListener('click', () => {
        // حذف الكوكيز
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

        // إعادة التوجيه إلى login
        window.location.href = 'login.html';
    });
};
