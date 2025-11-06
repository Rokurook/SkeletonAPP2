import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {}

  cerrarSesion(){
    console.log('Sesión cerrada');
    this.menu.close('mainMenu'); //cierre menú 
    this.router.navigate(['/login'])
  }


}
