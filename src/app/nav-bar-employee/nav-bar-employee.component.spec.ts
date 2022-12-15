import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEmployeeComponent } from './nav-bar-employee.component';

describe('NavBarEmployeeComponent', () => {
  let component: NavBarEmployeeComponent;
  let fixture: ComponentFixture<NavBarEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
