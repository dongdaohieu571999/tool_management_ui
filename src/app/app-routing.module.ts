import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificateComponent } from './certificate/certificate.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ContractComponent } from './contract/contract.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { IncomeComponent } from './income/income.component';
import { LabourContractComponent } from './labour-contract/labour-contract.component';
import { MailComponent } from './mail/mail.component';
import { NotificationComponent } from './notification/notification.component';
import { DetailcontractComponent } from './contract/detailcontract/detailcontract.component';
import { ApproveContractComponent } from './approve-contract/approve-contract.component';
import { DetailcustomerComponent } from './customer-list/detailcustomer/detailcustomer.component'; 


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
