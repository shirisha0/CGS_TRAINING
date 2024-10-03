import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMyAuditsComponent } from './emp-my-audits.component';

describe('EmpMyAuditsComponent', () => {
  let component: EmpMyAuditsComponent;
  let fixture: ComponentFixture<EmpMyAuditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpMyAuditsComponent]
    });
    fixture = TestBed.createComponent(EmpMyAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
