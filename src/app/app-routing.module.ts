import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCommissionManageComponent } from './././view/admin-commission-manage/admin-commission-manage.component';
import { AdminCustomerManageComponent } from '././view/admin-customer-manage/admin-customer-manage.component';
import { AdminEmployeeManageComponent } from '././view/admin-employee-manage/admin-employee-manage.component';
import { AdminSolutionManageComponent } from '././view/admin-solution-manage/admin-solution-manage.component';
import { DetailSolutionRequestComponent } from '././view/admin-solution-manage/solution-request-table/detail-solution-request/detail-solution-request.component';
import { CertificateComponent } from '././view/certificate/certificate.component';
import { ChangePassComponent } from '././view/change-pass/change-pass.component';
import { ContractComponent } from '././view/contract/contract.component';
import { CustomerListComponent } from '././view/customer-list/customer-list.component';
import { DashboardComponent } from '././view/dashboard/dashboard.component';
import { DocumentComponent } from '././view/document/document.component';
import { IllustrationComponent } from '././view/illustration/illustration.component';
import { IncomeComponent } from '././view/income/income.component';
import { LabourContractComponent } from '././view/labour-contract/labour-contract.component';
import { LoginComponent } from '././view/login/login.component';
import { MailComponent } from '././view/mail/mail.component';
import { NotificationComponent } from '././view/notification/notification.component';
import { ApproveContractComponent } from '././view/approve-contract/approve-contract.component';
import { AppraiserContractManageComponent } from '././view/appraiser-contract-manage/appraiser-contract-manage.component';
import { ViewDetailContractComponent } from '././view/view-detail-contract/view-detail-contract.component';
import { AppraiserRequestManageComponent } from '././view/appraiser-request-manage/appraiser-request-manage.component';
import { DetailRequestComponent } from './view/appraiser-request-manage/detail-request/detail-request.component';
import { ViewDetailCustomerComponent } from './view/view-detail-customer/view-detail-customer.component';
import { CreateIllustrationComponent } from './view/illustration/illustration-table/list-illustration/detail-illustration/create-illustration/create-illustration.component';
import { DetailIllustrationComponent } from './view/illustration/illustration-table/list-illustration/detail-illustration/detail-illustration.component';
import { ListIllustrationComponent } from '././view/illustration/illustration-table/list-illustration/list-illustration.component';
import { DetailInfoChangeHistoryComponent } from './view/view-detail-contract/detail-info-change-history/detail-info-change-history.component';
import { MailDetailComponent } from './view/mail/mail-detail/mail-detail.component';
import { ConfirmChangePassComponent } from './view/change-pass/confirm-change-pass/confirm-change-pass.component'
import { ViewDetailCustomerAdminComponent } from './view/admin-customer-manage/view-customer-table/view-detail-customer-admin/view-detail-customer-admin.component';
import { DetailEmTableComponent } from './view/admin-employee-manage/view-em-table/detail-em-table/detail-em-table.component';

const routes: Routes = [
  {path : "dashboard", component: DashboardComponent},
  {path: "notification", component: NotificationComponent},
  {path: "customer", component:CustomerListComponent},
  {path: "illustration", component:IllustrationComponent},
  {path: "contract", component:ContractComponent},
  {path: "income", component:IncomeComponent},
  {path: "mail", component:MailComponent},
  {path: "view_detail_mail", component:MailDetailComponent},
  {path: "document", component:DocumentComponent},
  {path: "certificate", component:CertificateComponent},
  {path: "labour-contract", component:LabourContractComponent},
  {path: "change-pass", component:ChangePassComponent},
  {path: "approve-contract", component:ApproveContractComponent},
  {path: "login", component:LoginComponent},
  {path: "employee-manage", component:AdminEmployeeManageComponent},
  {path: "customer-manage", component:AdminCustomerManageComponent},
  {path: "commission-manage", component:AdminCommissionManageComponent},
  {path: "solution-manage", component:AdminSolutionManageComponent},
  {path: "detail-solution-request", component:DetailSolutionRequestComponent},
  {path: "appraiser-contract-manage", component: AppraiserContractManageComponent},
  {path: "contract-detail/:id", component: ViewDetailContractComponent},
  {path: "appraiser-request-manage", component: AppraiserRequestManageComponent},
  {path: "appraiser-request-detail/:id", component: DetailRequestComponent},
  {path: "customer-detail/:id", component: ViewDetailCustomerComponent},
  {path: "create-illustration", component: CreateIllustrationComponent},
  {path: "detail-illustration", component: DetailIllustrationComponent},
  {path: "list-illustration/:id", component: ListIllustrationComponent},
  {path: "confirm-change-pass", component: ConfirmChangePassComponent},
  {path: "detai-history-change/:id", component: DetailInfoChangeHistoryComponent},
  {path: "customer-detail-admin/:id", component: ViewDetailCustomerAdminComponent},
  {path: "employee-detail-admin/:id", component: DetailEmTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
