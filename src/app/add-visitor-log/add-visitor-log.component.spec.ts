import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitorLogComponent } from './add-visitor-log.component';

describe('AddVisitorLogComponent', () => {
  let component: AddVisitorLogComponent;
  let fixture: ComponentFixture<AddVisitorLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisitorLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVisitorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
