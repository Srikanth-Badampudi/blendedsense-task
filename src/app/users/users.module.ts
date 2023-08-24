import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { HomeComponent } from './home/home.component';
import { CommonDesignModuleModule } from '../common-design-module/common-design-module.module';

@NgModule({
  declarations: [UserLayoutComponent, HomeComponent],
  imports: [CommonModule, UsersRoutingModule, CommonDesignModuleModule],
})
export class UsersModule {}
