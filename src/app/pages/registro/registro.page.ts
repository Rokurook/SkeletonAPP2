import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular'; 
import { FormatearFechaPipe } from '../../pipes/formatear-fecha-pipe';
import { Dataservice } from '../../services/dataservice';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone:false
})
export class RegistroPage implements OnInit {

  nombre: any='';
  apellido: any='';
  selectedOption: any=''; // nivel de estudios aqui va el nivel de estudio
  selectedDate: any='';
  usuario: any='';
  password: any='';

  constructor(private alertController: AlertController, private menu: MenuController, 
              private formatearFechaPipe:FormatearFechaPipe,
              private dataService: Dataservice) { }

  ngOnInit() {
    this.menu.close("mainMenu");
  }

  
async presentAlert(message: string) {
  const alert = await this.alertController.create({
    header: 'Mensaje',
    message: message,
    buttons: ['OK']
  });

   await alert.present();
  }

    /*guardar() 
    { 

      const fechaFormateada = this.FormatearFechaPipe.transform(this.selectedDate);

      if (this.nombre.trim() === '' || this.apellido.trim() === '') {
        this.presentAlert('Error: nombre y apellido vacios');
      } else {
        this.presentAlert('Datos Correctos  usuario:  '+this.nombre+' fecha nacimiento: '+fechaFormateada);  //
      }
  }*/

  guardarDatos() {
    this.dataService.insertUsuario(this.nombre, this.apellido, this.usuario, this.password, this.selectedOption, this.selectedDate)
      .then(() => {
        this.presentAlert('Datos guardados exitosamente');
        // Aquí puedes añadir lógica adicional, como mostrar un mensaje de éxito al usuario.
      })
      .catch(error => {
        this.presentAlert('Error al guardar datos:'+ error);
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
      });
  }




}
