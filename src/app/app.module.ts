import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from '../components/customers/customers.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { CustomerDetailComponent } from '../components/customer-detail/customer-detail.component';
import { NewCustomerComponent } from '../components/new-customer/new-customer.component';

import { CustomersService } from '../providers/customer-service/customers.service';



const appRoutes: Routes = [
  { path: '', redirectTo: '/Customers', pathMatch: 'full' },
  { path: 'Customers',  component: CustomersComponent },
  { path: 'Orders',  component: OrdersComponent },
  
  { path: 'detail/:id', component: CustomerDetailComponent },

];



@NgModule({
  declarations: [
    AppComponent,
   CustomersComponent,
   OrdersComponent,
  CustomerDetailComponent,
   NewCustomerComponent
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
   exports: [ RouterModule ],
  providers: [
     CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
