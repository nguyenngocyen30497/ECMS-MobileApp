import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAuthPage } from './register-auth.page';

describe('RegisterAuthPage', () => {
  let component: RegisterAuthPage;
  let fixture: ComponentFixture<RegisterAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAuthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
