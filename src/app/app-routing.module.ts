import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCommissionManageComponent } from './admin-commission-manage/admin-commission-manage.component';
import { AdminCustomerManageComponent } from './admin-customer-manage/admin-customer-manage.component';
import { AdminEmployeeManageComponent } from './admin-employee-manage/admin-employee-manage.component';
import { ViewDetailEmployeeComponent } from './admin-employee-manage/view-detail-employee/view-detail-employee.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ContractComponent } from './contract/contract.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { IncomeComponent } from './income/income.component';
import { LabourContractComponent } from './labour-contract/labour-contract.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotificationComponent } from './notification/notification.component';


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
  {path: "login", component:LoginComponent},
  {path: "employee-manage", component:AdminEmployeeManageComponent},
  {path: "detail-employee", component:ViewDetailEmployeeComponent},
  {path: "customer-manage", component:AdminCustomerManageComponent},
  {path: "commission-manage", component:AdminCommissionManageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
