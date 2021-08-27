import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonPhoneRegistrationComponent } from './person-phone-registration/person-phone-registration.component';
import { ExampleTestService } from './services/example-test.service';
import { PersonPhoneComponent } from './person-phone/person-phone.component';
import { PersonPhonesComponent } from './person-phones/person-phones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,  
    PersonPhoneRegistrationComponent, PersonPhoneComponent, PersonPhonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ExampleTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
