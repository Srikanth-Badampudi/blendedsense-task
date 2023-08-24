import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { BusinessComponent } from './All-businesses/business.component';
import { BusinessesLayoutComponent } from './businesses-layout/businesses-layout.component';

const routes: Routes = [
  {
    path: '',component:BusinessesLayoutComponent,
    children: [
      { path: '', component: BusinessComponent, pathMatch: 'full' },
      { path: 'project_overview', component: BusinessDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessesRoutingModule {}
