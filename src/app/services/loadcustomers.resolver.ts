import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Customers } from '../models/customers';
import { ServicesapiService } from './servicesapi.service';

@Injectable({
  providedIn: 'root'
})
export class LoadcustomersResolver implements Resolve<Customers[]> {
  constructor(private service:ServicesapiService<Customers>) {
    this.service.name = "customers"
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customers[]> {
    return this.service.getAll();
  }
}
