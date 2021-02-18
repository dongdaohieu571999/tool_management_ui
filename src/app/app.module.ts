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
import { ReviewClaimPaymentComponent } from './review-claim-payment/review-claim-payment.component';
import { DetailcontractComponent } from './contract/detailcontract/detailcontract.component';
import { DetailcustomerComponent } from './customer-list/detailcustomer/detailcustomer.component'

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
    DetailcustomerComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
