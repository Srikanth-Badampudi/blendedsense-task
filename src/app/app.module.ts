import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';

//import Modules
import { BusinessesModule } from './businesses/businesses.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SweepsModule } from './sweeps/sweeps.module';
import { UsersModule } from './users/users.module';
import { CommonDesignModuleModule } from './common-design-module/common-design-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    DashboardModule,
    BusinessesModule,
    SweepsModule,
    UsersModule,
    BrowserAnimationsModule,
    CommonDesignModuleModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
