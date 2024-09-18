var e = document.getElementById("email");   // User input field
var p = document.getElementById("pass");    // Password input field
var btn = document.getElementById("btn");   // Login button
var radio = document.getElementsByName("role");  // Radio buttons for role selection
var error = document.getElementById("error");    // Error message display area

var admin_dic = [];   // Admin credentials array
var employee_dic = [];   // Employee credentials array

// Load admin credentials from JSON file
fetch('admin_credentials.json')
    .then(response => response.json())
    .then(data => {
        admin_dic = data.users;   // Assuming `users` is an array in the JSON
    })
    .catch(error => console.error('Error loading admin credentials:', error));

// Load employee credentials from JSON file
fetch('employee_credentials.json')
    .then(response => response.json())
    .then(data => {
        employee_dic = data.users;  // Assuming `users` is an array in the JSON
    })
    .catch(error => console.error('Error loading employee credentials:', error));

// Add event listener for the login button
btn.addEventListener("click", display);

// Function to handle login and redirection based on role
function display(event) {
    event.preventDefault();   // Prevent the default form submission behavior
    
    var ce = e.value;   // Get the entered username (user)
    var cp = p.value;   // Get the entered password (pass)
    var selectedRole = '';   // Initialize role variable

    // Check which radio button (Admin or Employee) is selected
    for (const r of radio) {
        if (r.checked) {
            selectedRole = r.value;
            break;
        }
    }

    if (selectedRole === 'admin') {
        var admin = admin_dic.find(user => user.user === ce);
        if (admin && admin.pass === cp) {
            // Store admin profile information in localStorage
            localStorage.setItem('username', ce);
            localStorage.setItem('role', 'admin');
            localStorage.setItem('profile', JSON.stringify(admin));  // Store the entire user object
            localStorage.setItem('isLoggedIn', 'true');
            
            // Redirect to admin dashboard
            window.location.href = 'chatgpt_cms/admin_user/admin.html';
        } else {
            error.innerText = "Invalid admin credentials";
        }
    } else if (selectedRole === 'employee') {
        var employee = employee_dic.find(user => user.user === ce);
        if (employee && employee.pass === cp) {
            // Store employee profile information in localStorage
            localStorage.setItem('username', ce);
            localStorage.setItem('role', 'employee');
            localStorage.setItem('profile', JSON.stringify(employee));  // Store the entire user object
            localStorage.setItem('isLoggedIn', 'true');
            
            // Redirect to employee dashboard
            window.location.href = 'chatgpt_cms/emp_cms/employee_dash_new.html';
        } else {
            error.innerText = "Invalid employee credentials";
        }
    }

}    