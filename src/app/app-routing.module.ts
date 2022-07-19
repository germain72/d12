import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersapiComponent } from './components/customersapi/customersapi.component';
import { GuardGuard } from './services/guard.guard';
import { LoadcustomersResolver } from './services/loadcustomers.resolver';

const routes: Routes = [
  {
    path: '',
    component: CustomersapiComponent,
    canActivate: [GuardGuard],
    resolve : {dataCustomers : LoadcustomersResolver},
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
