import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { ContractComponent } from './contract/contract.component';
import { IncomeComponent } from './income/income.component';
import { MailComponent } from './mail/mail.component';
import { DocumentComponent } from './document/document.component';
import { CertificateComponent } from './certificate/certificate.component';
import { LabourContractComponent } from './labour-contract/labour-contract.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ApproveContractComponent } from './approve-contract/approve-contract.component';
import { LoginComponent } from './login/login.component';
import { AdminEmployeeManageComponent } from './admin-employee-manage/admin-employee-manage.component';
import { ViewEmTableComponent } from './admin-employee-manage/view-em-table/view-em-table.component';
import { AdminDataServiceService } from './services/admin-data-service.service';
import { ViewDetailEmployeeComponent } from './admin-employee-manage/view-detail-employee/view-detail-employee.component';
import { DetailEmTableComponent } from './admin-employee-manage/view-em-table/detail-em-table/detail-em-table.component';
import { AdminCustomerManageComponent } from './admin-customer-manage/admin-customer-manage.component';
import { ViewCustomerTableComponent } from './admin-customer-manage/view-customer-table/view-customer-table.component';
import { AdminCommissionManageComponent } from './admin-commission-manage/admin-commission-manage.component';
import { CommissionTableComponent } from './admin-commission-manage/commission-table/commission-table.component';
import { AdminSolutionManageComponent } from './admin-solution-manage/admin-solution-manage.component';
import { SolutionRequestTableComponent } from './admin-solution-manage/solution-request-table/solution-request-table.component';
import { DetailSolutionRequestComponent } from './admin-solution-manage/solution-request-table/detail-solution-request/detail-solution-request.component';
import { DetailCustomerComponent } from './admin-customer-manage/view-customer-table/detail-customer/detail-customer.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { SolutionHistoryComponent } from './admin-solution-manage/solution-history/solution-history.component';
import { SolutionHistoryTableComponent } from './admin-solution-manage/solution-history/solution-history-table/solution-history-table.component';

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
  ],
  providers: [AdminDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
