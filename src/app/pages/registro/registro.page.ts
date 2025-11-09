import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone:false
})
export class RegistroPage implements OnInit {

  nombre: any='';
  apellido: any='';
  selectedOption: any=''; // nivel de estudios
  selectedDate: any='';
  usuario: any='';
  password: any='';

  constructor(private alertController: AlertController, 
             private menu: MenuController,
              ) { }

  ngOnInit() {
  }

}
