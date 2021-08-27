import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonPhoneRegistrationComponent } from './person-phone-registration/person-phone-registration.component';
import { PersonPhoneComponent } from './person-phone/person-phone.component';
import { PersonPhonesComponent } from './person-phones/person-phones.component';

const routes: Routes = [
  { path: '', component: PersonPhonesComponent, pathMatch: 'full' },
  { path: 'personPhone/:id', component: PersonPhoneComponent },
  { path: 'add/:id', component: PersonPhoneRegistrationComponent },
  { path: 'personPhone/edit/:id', component: PersonPhoneRegistrationComponent },
  { path: '**', redirectTo: '/' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
