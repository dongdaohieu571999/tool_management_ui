import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// material
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { NotificationComponent } from './view/notification/notification.component';
import { CustomerListComponent } from './view/customer-list/customer-list.component';
import { IllustrationComponent } from './view/illustration/illustration.component';
import { ContractComponent } from './view/contract/contract.component';
import { IncomeComponent } from './view/income/income.component';
import { MailComponent } from './view/mail/mail.component';
import { DocumentComponent } from './view/document/document.component';
import { CertificateComponent } from './view/certificate/certificate.component';
import { LabourContractComponent } from './view/labour-contract/labour-contract.component';
import { ChangePassComponent } from './view/change-pass/change-pass.component';
import { ApproveContractComponent } from './view/approve-contract/approve-contract.component';
import { ReviewClaimPaymentComponent } from './view/review-claim-payment/review-claim-payment.component';
import { DetailcontractComponent } from './view/contract/detailcontract/detailcontract.component';
import { DetailcustomerComponent } from './view/customer-list/detailcustomer/detailcustomer.component'
import { LoginComponent } from './view/login/login.component';
import { AdminEmployeeManageComponent } from './view/admin-employee-manage/admin-employee-manage.component';
import { ViewEmTableComponent } from './view/admin-employee-manage/view-em-table/view-em-table.component';
import { AdminDataServiceService } from './services/admin-data-service.service';
import { ViewDetailEmployeeComponent } from './view/admin-employee-manage/view-detail-employee/view-detail-employee.component';
import { DetailEmTableComponent } from './view/admin-employee-manage/view-em-table/detail-em-table/detail-em-table.component';
import { AdminCustomerManageComponent } from './view/admin-customer-manage/admin-customer-manage.component';
import { ViewCustomerTableComponent } from './view/admin-customer-manage/view-customer-table/view-customer-table.component';
import { AdminCommissionManageComponent } from './view/admin-commission-manage/admin-commission-manage.component';
import { CommissionTableComponent } from './view/admin-commission-manage/commission-table/commission-table.component';
import { AdminSolutionManageComponent } from './view/admin-solution-manage/admin-solution-manage.component';
import { SolutionRequestTableComponent } from './view/admin-solution-manage/solution-request-table/solution-request-table.component';
import { DetailSolutionRequestComponent } from './view/admin-solution-manage/solution-request-table/detail-solution-request/detail-solution-request.component';
import { DetailCustomerComponent } from './view/admin-customer-manage/view-customer-table/detail-customer/detail-customer.component';
import { ResetPasswordComponent } from './view/login/reset-password/reset-password.component';
import { SolutionHistoryComponent } from './view/admin-solution-manage/solution-history/solution-history.component';
import { SolutionHistoryTableComponent } from './view/admin-solution-manage/solution-history/solution-history-table/solution-history-table.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotificationComponent,
    CustomerListComponent,
    IllustrationComponent,
    ContractComponent,
    IncomeComponent,
    MailComponent,
    DocumentComponent,
    CertificateComponent,
    LabourContractComponent,
    ChangePassComponent,
    ApproveContractComponent,
    ReviewClaimPaymentComponent,
    DetailcontractComponent,
    DetailcustomerComponent,
    LoginComponent,
    AdminEmployeeManageComponent,
    ViewEmTableComponent,
    ViewDetailEmployeeComponent,
    DetailEmTableComponent,
    AdminCustomerManageComponent,
    ViewCustomerTableComponent,
    AdminCommissionManageComponent,
    CommissionTableComponent,
    AdminSolutionManageComponent,
    SolutionRequestTableComponent,
    DetailSolutionRequestComponent,
    DetailCustomerComponent,
    ResetPasswordComponent,
    SolutionHistoryComponent,
    SolutionHistoryTableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [AdminDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
