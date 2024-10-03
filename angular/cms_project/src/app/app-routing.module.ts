import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminAuditManagementComponent } from './admin-audit-management/admin-audit-management.component';
import { AdminCompliancePoliciesComponent } from './admin-compliance-policies/admin-compliance-policies.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AdminManageuserComponent } from './admin-manageuser/admin-manageuser.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { AdminSettingComponent } from './admin-setting/admin-setting.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { EmpComplianceTaskComponent } from './emp-compliance-task/emp-compliance-task.component';
import { EmpMyAuditsComponent } from './emp-my-audits/emp-my-audits.component';
import { EmpPolicyUpdatesComponent } from './emp-policy-updates/emp-policy-updates.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { EmpLogoutComponent } from './emp-logout/emp-logout.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-audit-management', component: AdminAuditManagementComponent },
  { path: 'admin-compliance-policies', component: AdminCompliancePoliciesComponent },
  { path: 'admin-logout', component: AdminLogoutComponent },
  { path: 'admin-manageuser', component: AdminManageuserComponent },
  { path: 'admin-reports', component: AdminReportsComponent },
  { path: 'admin-setting', component: AdminSettingComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'emp-compliance-task', component: EmpComplianceTaskComponent },
  { path: 'emp-my-audits', component: EmpMyAuditsComponent },
  { path: 'emp-policy-update', component:EmpPolicyUpdatesComponent },
  { path: 'emp-profile', component: EmpProfileComponent },
  { path: 'emp-logout', component: EmpLogoutComponent },
  {path:'register',component:RegisterComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
