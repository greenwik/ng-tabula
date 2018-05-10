import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SolidGaugeComponent } from './solidGauge/solidGauge.component';
import { OverviewComponent } from './overview/overview.component';



const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'solidGauge', component: SolidGaugeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
