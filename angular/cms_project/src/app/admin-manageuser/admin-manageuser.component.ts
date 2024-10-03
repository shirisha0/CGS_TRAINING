import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-manageuser',
  templateUrl: './admin-manageuser.component.html',
  styleUrls: ['./admin-manageuser.component.css']
})
export class AdminManageuserComponent {
  // This will hold new user data from the form
  newUser = { name: '', username: '', email: '', role: 'User' };

  // Empty array to store users locally
  users: any[] = [];

  constructor() {
    // Initial fetch of users (empty for now, as we are simulating)
    this.fetchUsers();
  }

  // Simulate fetching users (initially, the users array is empty)
  fetchUsers() {
    // You can load predefined users here if needed, or keep it empty
    this.users = [];
  }

  // Method to add a new user to the local users array
  addUser() {
    // Validation: ensure that all fields are filled before adding a new user
    if (!this.newUser.name || !this.newUser.username || !this.newUser.email || !this.newUser.role) {
      console.error('All fields are required!');
      return;
    }

    // Generate a new ID based on the length of the users array
    const newUserWithId = { ...this.newUser, id: this.users.length + 1 };

    // Add the new user to the local array
    this.users.push(newUserWithId);

    // Optionally display a success message in the console
    console.log('User added successfully!', newUserWithId);

    // Reset the form after adding the user
    this.newUser = { name: '', username: '', email: '', role: 'User' };
  }

  // Method to delete a user from the local users array
  deleteUser(user: any) {
    // Use Array filter to remove the user from the local array
    this.users = this.users.filter(u => u !== user);

    // Optionally display a success message in the console
    console.log('User deleted successfully!', user);
  }
}
