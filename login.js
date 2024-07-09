document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData.username === username && storedUserData.password === password) {
        const userType = localStorage.getItem('userType');

        if (userType === 'patient') {
            window.location.href = 'patient_dashboard.html';
        } else if (userType === 'doctor') {
            window.location.href = 'doctor_dashboard.html';
        }
    } else {
        alert('Invalid username or password');
    }
});
