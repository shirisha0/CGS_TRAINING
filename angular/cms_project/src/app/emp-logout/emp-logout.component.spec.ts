import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLogoutComponent } from './emp-logout.component';

describe('EmpLogoutComponent', () => {
  let component: EmpLogoutComponent;
  let fixture: ComponentFixture<EmpLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpLogoutComponent]
    });
    fixture = TestBed.createComponent(EmpLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
