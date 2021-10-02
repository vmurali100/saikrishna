import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PricingDetailsComponent } from './pricing-details/pricing-details.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'features',component:FeaturesComponent},
    {path:'pricing',component:PricingComponent},
    {path:'pricing/:id',component:PricingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
