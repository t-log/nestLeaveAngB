import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisitorLogComponent } from './view-visitor-log.component';

describe('ViewVisitorLogComponent', () => {
  let component: ViewVisitorLogComponent;
  let fixture: ComponentFixture<ViewVisitorLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVisitorLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVisitorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
