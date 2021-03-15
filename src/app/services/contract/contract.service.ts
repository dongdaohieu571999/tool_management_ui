import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contract } from 'src/app/model/Contract';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient, private common: CommonService,private route: Router) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token',
    }),
  }

  public getAllContract(): Observable<any>{
    const url = this.common.makeUrl("/contract/get_all_contract/" + this.common.getCookie("token_key"));
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  contractId: number;

  setContractId(contractId: number){
    this.contractId = contractId;
  }

  public getDetailContract(): Observable<any>{
    const url = this.common.makeUrl("/contract/get_detail_contract/"+ this.contractId + "/" + this.common.getCookie("token_key"));
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public addContract(contract: Contract): Observable<any>{
    const url = this.common.makeUrl("/contract/add_contract");
    return this.httpClient
    .post<any>(url,contract,this.httpOptions)
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
