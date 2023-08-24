import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SweepsRoutingModule } from './sweeps-routing.module';
import { SweepLayoutComponent } from './sweep-layout/sweep-layout.component';
import { HomeComponent } from './home/home.component';

import { CommonDesignModuleModule } from '../common-design-module/common-design-module.module';


@NgModule({
  declarations: [SweepLayoutComponent, HomeComponent],
  imports: [CommonModule, SweepsRoutingModule, CommonDesignModuleModule],
})
export class SweepsModule {}
