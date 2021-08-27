import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PersonPhone } from '../models/personphone';


@Injectable({
  providedIn: 'root'
})
export class ExampleTestService {
  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/Examples.Charge/';
  }
  getPersonPhones(): Observable<PersonPhone[]> {
    return this.http.get<PersonPhone[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  getPersonPhone(businessEntityID: number): Observable<PersonPhone> {
    return this.http.get<PersonPhone>(this.myAppUrl + this.myApiUrl + businessEntityID)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  savePersonPhone(personPhone: PersonPhone): Observable<PersonPhone> {
    return this.http.post<PersonPhone>(this.myAppUrl + this.myApiUrl, JSON.stringify(personPhone), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  updatePersonPhone(businessEntityID: number, personPhone: PersonPhone): Observable<PersonPhone> {
    return this.http.put<PersonPhone>(this.myAppUrl + this.myApiUrl + businessEntityID, JSON.stringify(personPhone), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  deletePersonPhone(businessEntityID: number): Observable<PersonPhone> {
    return this.http.delete<PersonPhone>(this.myAppUrl + this.myApiUrl + businessEntityID)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
}
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

