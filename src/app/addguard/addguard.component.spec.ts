import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddguardComponent } from './addguard.component';

describe('AddguardComponent', () => {
  let component: AddguardComponent;
  let fixture: ComponentFixture<AddguardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddguardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
