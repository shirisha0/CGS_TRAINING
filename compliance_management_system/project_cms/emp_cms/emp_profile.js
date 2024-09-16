// Retrieve the logged-in user profile from localStorage
const storedProfile = localStorage.getItem('profile');

if (storedProfile) {
    const userProfile = JSON.parse(storedProfile);  // Parse the stored profile data

    // Populate the profile page with user data
    document.getElementById('profileName').innerText = userProfile.fullName;
    document.getElementById('profileUsername').innerText = userProfile.user;
    document.getElementById('profilePhone').innerText = userProfile.phoneNumber;
    document.getElementById('profileEmail').innerText = userProfile.email;
    document.getElementById('profileAddress').innerText = `${userProfile.address.street}, ${userProfile.address.city}, ${userProfile.address.state}, ${userProfile.address.postalCode}`;
    document.getElementById('profileDOB').innerText = userProfile.dob;
} else {
    // Redirect to login page if no profile is found
    window.location.href = 'cms_login.html';
}
