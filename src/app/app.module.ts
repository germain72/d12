import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersapiComponent } from './components/customersapi/customersapi.component';
import { ListecustomersDirective } from './directives/listecustomers.directive';


@NgModule({
  declarations: [
    AppComponent,
    CustomersapiComponent,
    ListecustomersDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 *  providers: [ServicesapiService], : le service est un singleton
 */
