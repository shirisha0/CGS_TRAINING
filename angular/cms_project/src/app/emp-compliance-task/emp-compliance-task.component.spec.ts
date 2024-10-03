import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpComplianceTaskComponent } from './emp-compliance-task.component';

describe('EmpComplianceTaskComponent', () => {
  let component: EmpComplianceTaskComponent;
  let fixture: ComponentFixture<EmpComplianceTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpComplianceTaskComponent]
    });
    fixture = TestBed.createComponent(EmpComplianceTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
