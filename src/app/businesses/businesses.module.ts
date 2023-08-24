import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessesRoutingModule } from './businesses-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BusinessComponent } from './All-businesses/business.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';

import { BusinessesLayoutComponent } from './businesses-layout/businesses-layout.component';

import { CommonDesignModuleModule } from '../common-design-module/common-design-module.module';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    BusinessComponent,
    BusinessDetailsComponent,
    BusinessesLayoutComponent,
  ],
  imports: [
    CommonModule,
    BusinessesRoutingModule,
    HttpClientModule,
    ButtonModule,
    CommonDesignModuleModule,
    TableModule,
  ],
  exports: [
    BusinessComponent,
    BusinessDetailsComponent,
    BusinessesLayoutComponent,
  ],
})
export class BusinessesModule {}
