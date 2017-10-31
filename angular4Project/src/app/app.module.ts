import { StudentService } from './student/student.service';
import { CustomerService } from './customer/customer.service';
import { ProductService } from './product/product.service';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/Router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,   
    ProductComponent,    
    CustomerComponent, StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxDatatableModule,
    RouterModule.forRoot([
      {
        path: 'customer',
        component: CustomerComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'student',
        component: StudentComponent
      }
    ])
  ],
  providers: [    
    AppService,       
    ProductService,
    CustomerService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
