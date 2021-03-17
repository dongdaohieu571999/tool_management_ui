import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomerOwnIllustration } from 'src/app/model/CustomerOwnIllustration';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class IllustrationService {

  callRefreshTable = new EventEmitter();
  subsVar: Subscription;

  invokeRefreshTableFun() { 
    this.callRefreshTable.emit();
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token',
    }),
  }

  constructor(private httpClient: HttpClient,private common: CommonService) { }

  public getAllCustomerOwnIllustration(): Observable<any>{
    const url = this.common.makeUrl('/illustration/get_all_customer_own_illustration/');
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public getAllIllustrationBelongCustomer(id:number): Observable<any>{
    const url = this.common.makeUrl('/illustration/get_all_illustration_belong_customer/'+id);
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public addOneCustomerOwnIllustration(code:string): Observable<any>{
    const url = this.common.makeUrl('/illustration/add_one_customer_own_illustration/');
    return this.httpClient
    .post<any>(url,code,this.httpOptions)
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
