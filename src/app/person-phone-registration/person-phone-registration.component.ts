import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExampleTestService } from '../services/example-test.service';
import { PersonPhone } from '../models/personphone';

@Component({
  selector: 'app-person-phone-registration',
  templateUrl: './person-phone-registration.component.html',
  styleUrls: ['./person-phone-registration.component.scss']
})
export class PersonPhoneRegistrationComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formPhoneNumber: string;
  formPhoneTypeNumberId: string;
  businessEntityID!: number;
  errorMessage: any;
  existingPersonPhone!: PersonPhone;
  constructor(private exampleTestService: ExampleTestService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) { 
    const idParam = 'id';
    this.actionType = 'Add';
    this.formPhoneNumber = 'phoneNumber';
    this.formPhoneTypeNumberId = 'phoneTypeNumber';
    if (this.avRoute.snapshot.params[idParam]) {
      this.businessEntityID = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        postId: 0,
        phoneNumber: ['', [Validators.required]],
        phoneNumberTypedId: ['', [Validators.required]],
      }
    )
  }
  ngOnInit(){
    if (this.businessEntityID > 0) {
      this.actionType = 'Edit';
      this.exampleTestService.getPersonPhone(this.businessEntityID)
        .subscribe(data => (
          this.existingPersonPhone = data,
          this.form.controls[this.businessEntityID].setValue(data.BusinessEntityID),
          this.form.controls[this.formPhoneNumber].setValue(data.PhoneNumber),
          this.form.controls[this.formPhoneTypeNumberId].setValue(data.PhoneNumberTypeId)
        ));
    }
  }
  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let personPhone: PersonPhone = {                
        PhoneNumber: this.existingPersonPhone.PhoneNumber,
        PhoneNumberTypeId: this.existingPersonPhone.PhoneNumberTypeId,   
        BusinessEntityID: this.businessEntityID
      };

      this.exampleTestService.savePersonPhone(personPhone)
        .subscribe((data) => {
          this.router.navigate(['/personPhone', data.BusinessEntityID]);
        });
    }

    if (this.actionType === 'Edit') {
      let personPhone: PersonPhone = {
        BusinessEntityID: this.existingPersonPhone.BusinessEntityID,
        PhoneNumber: this.existingPersonPhone.PhoneNumber,
        PhoneNumberTypeId: this.existingPersonPhone.PhoneNumberTypeId               
      };
      this.exampleTestService.updatePersonPhone(personPhone.BusinessEntityID, personPhone)
        .subscribe((data) => {
          this.router.navigate([this.router.url]);
        });
    }
  }
  cancel() {
    this.router.navigate(['/']);
  }

  get phoneNumber() { return this.form.get(this.formPhoneNumber); }
  get phoneNumberTypeId() { return this.form.get(this.formPhoneTypeNumberId); }
}