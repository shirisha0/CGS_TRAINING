import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPolicyUpdatesComponent } from './emp-policy-updates.component';

describe('EmpPolicyUpdatesComponent', () => {
  let component: EmpPolicyUpdatesComponent;
  let fixture: ComponentFixture<EmpPolicyUpdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpPolicyUpdatesComponent]
    });
    fixture = TestBed.createComponent(EmpPolicyUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
