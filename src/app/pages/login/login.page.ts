import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Dataservice } from 'src/app/services/dataservice';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage  {

  email:string = '';
  password: string='';

    constructor(private navCtrl: NavController, 
                private alertController: AlertController, 
                private dataService: Dataservice) { }


  //funsión necesita libreria / ademas de definir como objeto privado dentro del contructor / Método para mostrar alerta de error
  async mostrarAlerta(mensaje: string){
    const alert = await this.alertController.create({
      header :'Error',
      message: mensaje,
      buttons: ['OK']
    }); 
    await alert.present();
  }


//función para validar el formato del email
validarEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// Expresión para validar email
  return emailRegex.test(email);
}


  async login(){
    //verificar que campo de correo no esté vacio
    if (!this.email){
      this.mostrarAlerta('El campo de correo no puede estar vacio.');
      return;
    }

    //validar el formato del correo 
    if(!this.validarEmail(this.email)) {
      this.mostrarAlerta('El formato del correo es invalido.');
      return;
    }

    //verificar que contraseña no esté vacia 
    if(!this.password){
      this.mostrarAlerta('El campo de contraseña no puede estar vacio.');
      return;
    }

    //Verificar que la contraseña tenga máximo 4 caracteres 
    if (this.password.length < 4) {
          this.mostrarAlerta('La contraseña no puede tener menos  de 4 caracteres.');
      return;
    }

    //si todas la validaciones son correctas
    /*
    localStorage.setItem('usuarioActivo','true'); //<--simular sesion iniciada
    //si todas las validadciones son correctas, navega a la pagina "home"
    this.navCtrl.navigateForward(['/home'], {
        queryParams: {
          email: this.email 
        }
      });*/

      // Si esta el registro en la base de datos ahi redireccionamos alhome

  
      const logged = await this.dataService.validarUsuario(this.email, this.password);
      if (logged) {
        // Usuario válido, realizar acciones de inicio de sesión
        
        localStorage.setItem('sesion_iniciada','true') 
        this.navCtrl.navigateForward(['/home'], {
        queryParams: {
          email: this.email 
        }

      });
      } else {
        // Usuario inválido, mostrar mensaje de error
        this.mostrarAlerta('No existe el usuario en la base datos');
      }
  

}

    // despues
  registro() {
    this.navCtrl.navigateForward(['/registro']);
  }

}


 
