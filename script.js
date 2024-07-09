document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const userType = document.getElementById('userType').value;
    const formData = new FormData(this);

    localStorage.setItem('userType', userType);
    localStorage.setItem('userData', JSON.stringify(Object.fromEntries(formData)));

    window.location.href = 'login.html';
});
