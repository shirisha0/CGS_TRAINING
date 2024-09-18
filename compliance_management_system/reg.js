document.getElementById('btn').addEventListener('click', function (event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('fn').value;
    const email = document.getElementById('e').value;
    const password = document.getElementById('p').value;
    const confirmPassword = document.getElementById('cp').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('add').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const postalCode = document.getElementById('pos').value;
    const country = document.getElementById('inputState').value;
    const dob = document.getElementById('date').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Basic validation
    if (password !== confirmPassword) {
        document.getElementById('error').innerText = "Passwords do not match!";
        return;
    }

    // Create an object with the user's data
    const userData = {
        fullName,
        email,
        password,
        phone,
        address,
        city,
        state,
        postalCode,
        country,
        dob,
        gender
    };

    // Save user data in localStorage
    localStorage.setItem('userProfile', JSON.stringify(userData));

    // Redirect to profile page after successful registration
    window.location.href = 'chatgpt_cms/emp_cms/emp_profile.html';
});
