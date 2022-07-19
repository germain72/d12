import { Directive, ElementRef, Input } from '@angular/core';
import { Customers } from '../models/customers';

/**
 * <div [appListecustomers]="customers"></div>
 */

@Directive({
  selector: '[appListecustomers]'
})
export class ListecustomersDirective {

  @Input()
  set appListecustomers(listeCustomers:Customers[]) {
    let balise =this.ref.nativeElement;
    let contenu ='';
    contenu += '<table>';
    contenu += '<thead><th>id</th><th>name</th><th>societe</th></thead><tbody>';
    listeCustomers.forEach(c=>contenu+= `<tr><td>${c.id}</td><td>${c.name}</td><td>${c.societe}</td></tr>`);
    contenu += '</tbody></table>';

    balise.innerHTML = contenu;
  }

  /**
   *
   * @param ref : c'est la référence de la balise parente
   */
  constructor(private ref:ElementRef) { }

}
