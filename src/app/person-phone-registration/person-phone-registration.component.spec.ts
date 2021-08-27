import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPhoneRegistrationComponent } from './person-phone-registration.component';

describe('PersonPhoneRegistrationComponent', () => {
  let component: PersonPhoneRegistrationComponent;
  let fixture: ComponentFixture<PersonPhoneRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonPhoneRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonPhoneRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
