import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { NgxSpinnerModule } from 'ngx-spinner'

// material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from '././view/dashboard/dashboard.component';
import { NotificationComponent } from '././view/notification/notification.component';
import { CustomerListComponent } from '././view/customer-list/customer-list.component';
import { IllustrationComponent } from '././view/illustration/illustration.component';
import { ContractComponent } from '././view/contract/contract.component';
import { IncomeComponent } from './././view/income/income.component';
import { MailComponent } from '././view/mail/mail.component';
import { DocumentComponent } from '././view/document/document.component';
import { CertificateComponent } from '././view/certificate/certificate.component';
import { LabourContractComponent } from '././view/labour-contract/labour-contract.component';
import { ChangePassComponent } from '././view/change-pass/change-pass.component';
import { ApproveContractComponent } from '././view/approve-contract/approve-contract.component';
import { ReviewClaimPaymentComponent } from '././view/review-claim-payment/review-claim-payment.component';
import { LoginComponent } from '././view/login/login.component';
import { AdminEmployeeManageComponent } from '././view/admin-employee-manage/admin-employee-manage.component';
import { ViewEmTableComponent } from '././view/admin-employee-manage/view-em-table/view-em-table.component';
import { AdminDataServiceService } from '././services/admin-data-service.service';
import { DetailEmTableComponent } from '././view/admin-employee-manage/view-em-table/detail-em-table/detail-em-table.component';
import { AdminCustomerManageComponent } from '././view/admin-customer-manage/admin-customer-manage.component';
import { ViewCustomerTableComponent } from '././view/admin-customer-manage/view-customer-table/view-customer-table.component';
import { AdminCommissionManageComponent } from '././view/admin-commission-manage/admin-commission-manage.component';
import { CommissionTableComponent } from '././view/admin-commission-manage/commission-table/commission-table.component';
import { AdminSolutionManageComponent } from '././view/admin-solution-manage/admin-solution-manage.component';
import { SolutionRequestTableComponent } from '././view/admin-solution-manage/solution-request-table/solution-request-table.component';
import { DetailSolutionRequestComponent } from '././view/admin-solution-manage/solution-request-table/detail-solution-request/detail-solution-request.component';
import { SolutionHistoryComponent } from '././view/admin-solution-manage/solution-history/solution-history.component';
import { SolutionHistoryTableComponent } from '././view/admin-solution-manage/solution-history/solution-history-table/solution-history-table.component';
import { AdminAddAccCustomerComponent } from '././view/dialog/admin-add-acc-customer/admin-add-acc-customer.component';
import { AppraiserContractManageComponent } from '././view/appraiser-contract-manage/appraiser-contract-manage.component';
import { ViewDetailContractComponent } from './view/view-detail-contract/view-detail-contract.component';
import { AppraiserRequestManageComponent } from '././view/appraiser-request-manage/appraiser-request-manage.component';
import { DetailRequestComponent } from '././view/appraiser-request-manage/detail-request/detail-request.component';
import { ViewDetailCustomerComponent } from './view/view-detail-customer/view-detail-customer.component';
import { CustomerTableComponent } from '././view/customer-list/customer-table/customer-table.component';
import { IllustrationTableComponent } from '././view/illustration/illustration-table/illustration-table.component';
import { ContractTableComponent } from '././view/contract/contract-table/contract-table.component';
import { CreateIllustrationComponent } from './view/illustration/illustration-table/list-illustration/detail-illustration/create-illustration/create-illustration.component';
import { DetailIllustrationComponent } from './view/illustration/illustration-table/list-illustration/detail-illustration/detail-illustration.component';
import {AdminAddEmployeeInfoComponent} from '././view/dialog/admin-add-employee-info/admin-add-employee-info.component';
import {AdminAddAccountEmployeeComponent} from '././view/dialog/admin-add-account-employee/admin-add-account-employee.component';
import { ListIllustrationComponent } from '././view/illustration/illustration-table/list-illustration/list-illustration.component';
import { AddCustomerIllustrationDialogComponent } from './view/dialog/add-customer-illustration-dialog/add-customer-illustration-dialog.component';
import { CustomerAddInfoDialogComponent } from './view/dialog/customer-add-info-dialog/customer-add-info-dialog.component';
import { ContractAddDialogComponent } from './view/dialog/contract-add-dialog/contract-add-dialog.component';
import { NotificationConfirmDialogComponent } from './view/dialog/notification-confirm-dialog/notification-confirm-dialog.component';
import { PauseCustomerDialogComponent } from './view/dialog/pause-customer-dialog/pause-customer-dialog.component';
import { DetailInfoChangeHistoryComponent } from './view/view-detail-contract/detail-info-change-history/detail-info-change-history.component';
import { CustomerEditInfoComponent } from './view/dialog/customer-edit-info/customer-edit-info.component';
import { ReportCustomerDialogComponent } from './view/dialog/report-customer-dialog/report-customer-dialog.component';
import { MailDetailComponent } from './view/mail/mail-detail/mail-detail.component';
import { AddMailDialogComponent } from './view/dialog/add-mail-dialog/add-mail-dialog.component';
import { ConfirmChangePassComponent } from './view/change-pass/confirm-change-pass/confirm-change-pass.component';
import { ContractChangeInfoDialogComponent } from './view/dialog/contract-change-info-dialog/contract-change-info-dialog.component';
import { ContractPauseDialogComponent } from './view/dialog/contract-pause-dialog/contract-pause-dialog.component';
import { ViewDetailCustomerAdminComponent } from './view/admin-customer-manage/view-customer-table/view-detail-customer-admin/view-detail-customer-admin.component';
import { EmployeeEditInfoDialogComponent } from './view/dialog/employee-edit-info-dialog/employee-edit-info-dialog.component';
import { AppraiserReviewFormComponent } from './view/dialog/appraiser-review-form/appraiser-review-form.component';
import { AddRequestComponent } from './view/dialog/add-request/add-request/add-request.component';
import { AdminEditAccCustomerComponentComponent } from './view/dialog/admin-edit-acc-customer-component/admin-edit-acc-customer-component/admin-edit-acc-customer-component.component';
import { DetailIncomeComponent } from './view/income/detail-income/detail-income.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ContractDetailDialogComponent } from './view/dialog/contract-detail-dialog/contract-detail-dialog.component';
import { IllustrationDetailDialogComponent } from './view/dialog/illustration-detail-dialog/illustration-detail-dialog.component';

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
    LoginComponent,
    AdminEmployeeManageComponent,
    ViewEmTableComponent,
    DetailEmTableComponent,
    AdminCustomerManageComponent,
    ViewCustomerTableComponent,
    AdminCommissionManageComponent,
    CommissionTableComponent,
    AdminSolutionManageComponent,
    SolutionRequestTableComponent,
    DetailSolutionRequestComponent,
    SolutionHistoryComponent,
    SolutionHistoryTableComponent,
    AdminAddAccCustomerComponent,
    AdminAddEmployeeInfoComponent,
    AdminAddAccountEmployeeComponent,
    AppraiserContractManageComponent,
    ViewDetailContractComponent,
    AppraiserRequestManageComponent,
    DetailRequestComponent,
    ViewDetailCustomerComponent,
    CustomerTableComponent,
    IllustrationTableComponent,
    ContractTableComponent,
    CreateIllustrationComponent,
    DetailIllustrationComponent,
    ListIllustrationComponent,
    AddCustomerIllustrationDialogComponent,
    CustomerAddInfoDialogComponent,
    ContractAddDialogComponent,
    NotificationConfirmDialogComponent,
    PauseCustomerDialogComponent,
    DetailInfoChangeHistoryComponent,
    MailDetailComponent,
    AddMailDialogComponent,
    CustomerEditInfoComponent,
    ReportCustomerDialogComponent,
    ContractChangeInfoDialogComponent,
    ContractPauseDialogComponent,
    ConfirmChangePassComponent,
    ViewDetailCustomerAdminComponent,
    EmployeeEditInfoDialogComponent,
    AppraiserReviewFormComponent,
    AddRequestComponent,
    AdminEditAccCustomerComponentComponent,
    DetailIncomeComponent,
    ContractDetailDialogComponent,
    IllustrationDetailDialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgxSpinnerModule,
    FormsModule,
    ChartsModule,
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
    NgxPaginationModule,
    MatDialogModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  entryComponents: [AdminEditAccCustomerComponentComponent,AppraiserReviewFormComponent,EmployeeEditInfoDialogComponent,ContractPauseDialogComponent,ContractChangeInfoDialogComponent,ReportCustomerDialogComponent,CustomerEditInfoComponent,AdminAddAccCustomerComponent,AdminAddEmployeeInfoComponent,AdminAddAccountEmployeeComponent,AddCustomerIllustrationDialogComponent,CustomerAddInfoDialogComponent,ContractAddDialogComponent,NotificationConfirmDialogComponent,PauseCustomerDialogComponent],
  providers: [AdminDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
