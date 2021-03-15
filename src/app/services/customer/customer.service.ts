import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomerAcc } from 'src/app/model/CustomerAcc';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public customer: CustomerInfo;
  callRefreshTable = new EventEmitter();
  subsVar: Subscription;

  invokeRefreshTableFun() { 
    this.callRefreshTable.emit();
  }

  constructor(private httpClient: HttpClient, private common: CommonService,private route: Router) { }
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token',
    }),
  }

  public updateCustomerInfo(customerInfo:CustomerInfo):Observable<any>{
    const url = this.common.makeUrl("/customer/update_one_customer_info");
    return this.httpClient
    .post<any>(url,customerInfo,this.httpOptions)
    .pipe(catchError(this.handleError))
  }

  public getAllCustomerInfo(code_em_support:string): Observable<any>{
    const url = this.common.makeUrl("/customer/get_all_customer_info");
    return this.httpClient
    .post<any>(url,code_em_support,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public addOneAccCustomer(customerAcc :CustomerAcc): Observable<any>{
    const url = this.common.makeUrl("/customer/add_customer_acc");
    return this.httpClient
    .post<any>(url,customerAcc,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public addCustomerInfo(customerInfo :CustomerInfo): Observable<any>{
    const url = this.common.makeUrl("/customer/add_customer_info");
    return this.httpClient
    .post<any>(url,customerInfo,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public getOneAccCustomer(id:number,token_key:String){
    const url = this.common.makeUrl("/customer/get_one_customer_info");
    let data = {id:id,token_key:token_key};
    console.log(data);
    return this.httpClient
    .post<any>(url,data,this.httpOptions)
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
