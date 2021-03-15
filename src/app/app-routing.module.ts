import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveGuard } from 'src/services/resolve.guard';
import { CustomerComponent } from './customer/customer.component';
import { CityComponent } from './offers/city/city.component';
import { DetailsComponent } from './offers/details/details.component';
import { FeedbackComponent } from './offers/feedback/feedback.component';

const routes: Routes = [
  {path:"city", component:CityComponent},
  {path:"details", component:DetailsComponent},
  {path:"feedback", component:FeedbackComponent },
  {path:"customer", component:CustomerComponent, resolve:{customer: ResolveGuard}},
  { path: '', redirectTo: '/city', pathMatch: 'full'
}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
