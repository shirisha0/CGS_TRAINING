import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuditManagementComponent } from './admin-audit-management.component';

describe('AdminAuditManagementComponent', () => {
  let component: AdminAuditManagementComponent;
  let fixture: ComponentFixture<AdminAuditManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAuditManagementComponent]
    });
    fixture = TestBed.createComponent(AdminAuditManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
