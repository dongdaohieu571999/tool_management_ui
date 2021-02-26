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
import { DetailcustomerComponent } from './view/customer-list/customer-table/detailcustomer/detailcustomer.component'
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
import { ResetPasswordComponent } from './view/login/reset-password/reset-password.component';
import { SolutionHistoryComponent } from './view/admin-solution-manage/solution-history/solution-history.component';
import { SolutionHistoryTableComponent } from './view/admin-solution-manage/solution-history/solution-history-table/solution-history-table.component';
import { AppraiserContractManageComponent } from './view/appraiser-contract-manage/appraiser-contract-manage.component';
import { ViewDetailContractComponent } from './view/view-detail-contract/view-detail-contract.component';
import { AppraiserRequestManageComponent } from './view/appraiser-request-manage/appraiser-request-manage.component';
import { DetailRequestComponent } from './view/appraiser-request-manage/detail-request/detail-request.component';
import { ViewDetailCustomerComponent } from './view/view-detail-customer/view-detail-customer.component';
import { CustomerTableComponent } from './view/customer-list/customer-table/customer-table.component';
import { IllustrationTableComponent } from './view/illustration/illustration-table/illustration-table.component';
import { ContractTableComponent } from './view/contract/contract-table/contract-table.component';


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
    ResetPasswordComponent,
    SolutionHistoryComponent,
    SolutionHistoryTableComponent,
    AppraiserContractManageComponent,
    ViewDetailContractComponent,
    AppraiserRequestManageComponent,
    DetailRequestComponent,
    ViewDetailCustomerComponent,
    CustomerTableComponent,
    IllustrationTableComponent,
    ContractTableComponent,
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
