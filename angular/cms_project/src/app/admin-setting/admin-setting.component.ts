import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.css']
})
export class AdminSettingComponent {

  siteName: string = 'Compliance System';
  siteEmail: string = 'admin@example.com';
  siteTimezone: string = '';
  defaultUserRole: string = '';
  passwordPolicy: string = 'Minimum 8 characters, including one uppercase letter, one number, and one special character.';
  twoFactorAuth: string = '';
  sessionTimeout: number = 30;

  // Save general settings
  saveGeneralSettings() {
    console.log('General Settings Saved:', {
      siteName: this.siteName,
      siteEmail: this.siteEmail,
      siteTimezone: this.siteTimezone
    });
  }

  // Update user management settings
  updateUserManagementSettings() {
    console.log('User Management Settings Updated:', {
      defaultUserRole: this.defaultUserRole,
      passwordPolicy: this.passwordPolicy
    });
  }

  // Save security settings
  saveSecuritySettings() {
    console.log('Security Settings Saved:', {
      twoFactorAuth: this.twoFactorAuth,
      sessionTimeout: this.sessionTimeout
    });
  }
}
