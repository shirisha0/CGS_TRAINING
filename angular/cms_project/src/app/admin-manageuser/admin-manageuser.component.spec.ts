import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageuserComponent } from './admin-manageuser.component';

describe('AdminManageuserComponent', () => {
  let component: AdminManageuserComponent;
  let fixture: ComponentFixture<AdminManageuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminManageuserComponent]
    });
    fixture = TestBed.createComponent(AdminManageuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
