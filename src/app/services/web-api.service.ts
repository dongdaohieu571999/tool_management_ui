import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap} from  'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class WebApiService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // Authorization: 'my-auth-token'
    }),    
  };
  private REST_API = 'https://localhost:44321';
   
  constructor(private httpClient : HttpClient) { }
  
  public addEmployeeAccount(data : Account) : Observable<any>{
    const url = `${this.REST_API}/add_employee_acc`;
    return this.httpClient
    .post<any>(url,data,this.httpOptions) 
    .pipe(catchError(this.handleError));
  } 

  public getListAccount() : Observable<any>{
    const url = `${this.REST_API}/get_all_employee_acc`;
    return this.httpClient
    .get<any>(url,this.httpOptions) 
    .pipe(catchError(this.handleError));
  } 

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}