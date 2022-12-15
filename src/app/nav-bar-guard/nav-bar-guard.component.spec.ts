import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarGuardComponent } from './nav-bar-guard.component';

describe('NavBarGuardComponent', () => {
  let component: NavBarGuardComponent;
  let fixture: ComponentFixture<NavBarGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
