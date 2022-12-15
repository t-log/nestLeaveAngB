import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuardComponent } from './view-guard.component';

describe('ViewGuardComponent', () => {
  let component: ViewGuardComponent;
  let fixture: ComponentFixture<ViewGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
