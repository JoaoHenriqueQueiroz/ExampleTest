import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ExampleTestService } from '../services/example-test.service';
import { PersonPhone } from '../models/personphone';
@Component({
  selector: 'app-person-phone',
  templateUrl: './person-phone.component.html',
  styleUrls: ['./person-phone.component.scss']
})
export class PersonPhoneComponent implements OnInit {
  personPhone$!: Observable<PersonPhone>;
  busynessEntityID!: number;
  constructor(private exampleTestService: ExampleTestService, private avRoute: ActivatedRoute) { 
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.busynessEntityID = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit(){
    this.loadPersonPhone();
  }
  loadPersonPhone() {
    this.personPhone$ = this.exampleTestService.getPersonPhone(this.busynessEntityID);
  }  
}
