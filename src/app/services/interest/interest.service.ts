import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor(private httpClient: HttpClient, private common: CommonService) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token',
    }),
  }

  public getAllMainInterest(){
    const url =  this.common.makeUrl('/interest/get_all_main_interest/') ;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public getAllSubInterest(){
    const url =  this.common.makeUrl('/interest/get_all_sub_interest/') ;
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
