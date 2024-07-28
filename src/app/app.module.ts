import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BorrowLoanComponent } from './borrow-loan/borrow-loan.component';
import { LoggingInterceptor } from './intercept/logging.interceptor';
import { authGuard } from './service/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
   
    RegisterComponent,
        LoginComponent,
        DashboardComponent,
        BorrowLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: LoggingInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
