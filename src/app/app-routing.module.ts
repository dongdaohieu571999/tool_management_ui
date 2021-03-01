import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCommissionManageComponent } from './view/admin-commission-manage/admin-commission-manage.component';
import { AdminCustomerManageComponent } from './view/admin-customer-manage/admin-customer-manage.component';
import { DetailCustomerComponent } from './view/admin-customer-manage/view-customer-table/detail-customer/detail-customer.component';
import { AdminEmployeeManageComponent } from './view/admin-employee-manage/admin-employee-manage.component';
import { ViewDetailEmployeeComponent } from './view/admin-employee-manage/view-detail-employee/view-detail-employee.component';
import { AdminSolutionManageComponent } from './view/admin-solution-manage/admin-solution-manage.component';
import { DetailSolutionRequestComponent } from './view/admin-solution-manage/solution-request-table/detail-solution-request/detail-solution-request.component';
import { CertificateComponent } from './view/certificate/certificate.component';
import { ChangePassComponent } from './view/change-pass/change-pass.component';
import { ContractComponent } from './view/contract/contract.component';
import { CustomerListComponent } from './view/customer-list/customer-list.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { DocumentComponent } from './view/document/document.component';
import { IllustrationComponent } from './view/illustration/illustration.component';
import { IncomeComponent } from './view/income/income.component';
import { LabourContractComponent } from './view/labour-contract/labour-contract.component';
import { LoginComponent } from './view/login/login.component';
import { ResetPasswordComponent } from './view/login/reset-password/reset-password.component';
import { MailComponent } from './view/mail/mail.component';
import { NotificationComponent } from './view/notification/notification.component';
import { DetailcontractComponent } from './view/contract/detailcontract/detailcontract.component';
import { ApproveContractComponent } from './view/approve-contract/approve-contract.component';
import { DetailcustomerComponent } from './view/customer-list/detailcustomer/detailcustomer.component'; 


const routes: Routes = [
  {path : "dashboard", component: DashboardComponent},
  {path: "notification", component: NotificationComponent},
  {path: "customer", component:CustomerListComponent},
  {path: "illustration", component:IllustrationComponent},
  {path: "contract", component:ContractComponent},
  {path: "income", component:IncomeComponent},
  {path: "mail", component:MailComponent},
  {path: "document", component:DocumentComponent},
  {path: "certificate", component:CertificateComponent},
  {path: "labour-contract", component:LabourContractComponent},
  {path: "change-pass", component:ChangePassComponent},
  {path: "contract/detailcontract", component:DetailcontractComponent},
  {path: "approve-contract", component:ApproveContractComponent},
  {path: "customer/detailcustomer", component:DetailcustomerComponent},
  {path: "login", component:LoginComponent},
  {path: "employee-manage", component:AdminEmployeeManageComponent},
  {path: "detail-employee", component:ViewDetailEmployeeComponent},
  {path: "customer-manage", component:AdminCustomerManageComponent},
  {path: "commission-manage", component:AdminCommissionManageComponent},
  {path: "solution-manage", component:AdminSolutionManageComponent},
  {path: "detail-solution-request", component:DetailSolutionRequestComponent},
  {path: "detail-customer/:customerInfo", component: DetailCustomerComponent},
  {path: "reset-password", component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
