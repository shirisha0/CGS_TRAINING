import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompliancePoliciesComponent } from './admin-compliance-policies.component';

describe('AdminCompliancePoliciesComponent', () => {
  let component: AdminCompliancePoliciesComponent;
  let fixture: ComponentFixture<AdminCompliancePoliciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompliancePoliciesComponent]
    });
    fixture = TestBed.createComponent(AdminCompliancePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
