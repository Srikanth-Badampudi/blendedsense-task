import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './home/home.component';

import { CommonDesignModuleModule } from '../common-design-module/common-design-module.module';

@NgModule({
  declarations: [DashboardLayoutComponent, HomeComponent],
  imports: [CommonModule, DashboardRoutingModule, CommonDesignModuleModule],
  exports: [DashboardLayoutComponent, HomeComponent],
})
export class DashboardModule {}
