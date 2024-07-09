function displayUserDetails() {
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    const userDetailsDiv = document.getElementById('userDetails');

    userDetailsDiv.innerHTML = `
        <p>First Name: ${userDetails.firstName}</p>
        <p>Last Name: ${userDetails.lastName}</p>
        <p>Username: ${userDetails.username}</p>
        <p>Email: ${userDetails.email}</p>
        <p>Address: ${userDetails.addressLine1}, ${userDetails.city}, ${userDetails.state}, ${userDetails.pincode}</p>
    `;
}
