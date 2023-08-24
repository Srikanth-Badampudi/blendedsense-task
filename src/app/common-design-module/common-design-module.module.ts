import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [NavComponent, NavComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    AvatarModule,
    MenuModule,
  ],
  exports: [NavComponent],
})
export class CommonDesignModuleModule {}
