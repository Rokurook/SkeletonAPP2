import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-libreria',
  templateUrl: './company-libreria.component.html',
  styleUrls: ['./company-libreria.component.scss'],
})
export class CompanyLibreriaComponent  {

  constructor() { }

  @Input()companyliberia: string= 'Mi libreria App'; //valor predeterminado
  

}
