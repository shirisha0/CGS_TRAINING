async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

      
        document.getElementById('user-image').src = user.picture.large;
        document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
        document.getElementById('user-email').textContent = `Email: ${user.email}`;
        document.getElementById('user-phone').textContent = `Phone: ${user.phone}`;
        document.getElementById('user-address').textContent = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
}


fetchRandomUser();