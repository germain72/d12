import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Customers } from 'src/app/models/customers';
import { ServicesapiService } from '../../services/servicesapi.service';

/**
 * Commentaire pour être pris en charge par compodoc
 *
 * @author : Christophe Germain
 *
 * Composant de démo pour le CRUD de Csutomers
 */

@Component({
  selector: 'app-customersapi',
  templateUrl: './customersapi.component.html',
  styleUrls: ['./customersapi.component.css']
})
export class CustomersapiComponent implements OnInit {

  public customers : Customers[] = new Array<Customers>();
  private subroute !: Subject<any>;

/**
 * On récupère l'instance @Injectable de la classe ServicesapiService
 * @param service
 */
 /** constructor(public service :ServicesapiService<Customers>) {
    this.service.name = "customers"
   }*/

   constructor(private router: Router,private route :ActivatedRoute,private service :ServicesapiService<Customers>) {
    this.subroute = new Subject();
    this.subroute.subscribe((data)=>this.customers = data)
   }

  ngOnInit(): void { this.subroute.next(this.route.snapshot.data['dataCustomers']);}

  async refresh() {
    /**
     * Asynchronisation => c'est dans le subscribe que nous récupérons nos données
     *
     */
    /*this.service.getAll().subscribe(
      (data) => this.customers = data
    );*/
      this.router.navigated = false;
      await this.router.navigate([this.router.url]);
      this.subroute.next(this.route.snapshot.data['dataCustomers']);
    }

  /**
  async ngOnInit() { this. refreshAsync();}

  async  refreshAsync()  {

    this.customers = await this.service.getAll().toPromise() || [];
  }
  */


  /**
   * CRUD
   */

  add() {
    let customer = new Customers();
    customer.name = "D12 01";
    customer.societe = "DIGI";

    this.service.add(customer).subscribe(()=> this.refresh());

  }

  update(item : Customers) {
    item.name += "0001";
    this.service.update(item).subscribe(()=> this.refresh());

  }

  delete(item : Customers) {

    this.service.delete(item).subscribe(()=> this.refresh());

  }



}
