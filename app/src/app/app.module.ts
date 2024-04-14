import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { FormsModule } from '@angular/forms';
import { CustomerReportComponent } from './customer-report/customer-report.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerViewComponent,
    CustomerReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
