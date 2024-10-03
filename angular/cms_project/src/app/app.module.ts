import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';  // Import AdminComponent
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { AdminManageuserComponent } from './admin-manageuser/admin-manageuser.component';
import { AdminCompliancePoliciesComponent } from './admin-compliance-policies/admin-compliance-policies.component';
import { AdminAuditManagementComponent } from './admin-audit-management/admin-audit-management.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { AdminSettingComponent } from './admin-setting/admin-setting.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { EmpComplianceTaskComponent } from './emp-compliance-task/emp-compliance-task.component';
import { EmpMyAuditsComponent } from './emp-my-audits/emp-my-audits.component';
import { EmpPolicyUpdatesComponent } from './emp-policy-updates/emp-policy-updates.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { EmpLogoutComponent } from './emp-logout/emp-logout.component';  // Import EmployeeComponent
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,    // Declare AdminComponent
    EmployeeComponent, LoginComponent, AdminManageuserComponent, AdminCompliancePoliciesComponent, AdminAuditManagementComponent, AdminReportsComponent, AdminSettingComponent, AdminLogoutComponent, EmpComplianceTaskComponent, EmpMyAuditsComponent, EmpPolicyUpdatesComponent, EmpProfileComponent, EmpLogoutComponent, RegisterComponent  // Declare EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Ensure AppRoutingModule is imported
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }