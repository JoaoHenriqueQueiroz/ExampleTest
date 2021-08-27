import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleTestService } from '../services/example-test.service';
import { PersonPhone } from '../models/personphone';
@Component({
  selector: 'app-person-phones',
  templateUrl: './person-phones.component.html',
  styleUrls: ['./person-phones.component.scss']
})
export class PersonPhonesComponent implements OnInit {
  personPhones$: Observable<PersonPhone[]>;
  constructor(private exampleTestService: ExampleTestService, obsPersonPhones: Observable<PersonPhone[]>) { 
    this.personPhones$ = obsPersonPhones;
  }

  ngOnInit()  {
    this.loadPersonPhones()
  }
  loadPersonPhones() {
    this.personPhones$ = this.exampleTestService.getPersonPhones() != undefined ? this.exampleTestService.getPersonPhones() : this.personPhones$; 
  }
  delete(BusinessEntityID: number) {
    const ans = confirm('Do you want to delete person phone with id: ' + BusinessEntityID);
    if (ans) {
      this.exampleTestService.deletePersonPhone(BusinessEntityID).subscribe((data) => {
        this.loadPersonPhones();
      });
    }
  }
}
