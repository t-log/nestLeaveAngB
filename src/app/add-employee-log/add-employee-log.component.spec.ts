import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeLogComponent } from './add-employee-log.component';

describe('AddEmployeeLogComponent', () => {
  let component: AddEmployeeLogComponent;
  let fixture: ComponentFixture<AddEmployeeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
