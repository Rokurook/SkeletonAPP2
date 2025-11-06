import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; //comunicar pagina con otra / incluir constructor como atributo privado 



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage  {

  email:string = '';
  password: string='';

  constructor(private alertController: AlertController,
              private router: Router
  ) { }

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
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Expresión para validar email
  return emailRegex.test(email);
}


  login(){
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
    if((this.password.length < 3) && (this.password.length > 8)) {
      this.mostrarAlerta('El campo de contraseña debe tener 3 a 8 caracteres');
      return;
    }

    //si todas las validadciones son correctas, navega a la pagina "home"
    this.router.navigate(['/home'],{ state:{ user: this.email}});
  }


  registro()
  {
    this.router.navigate(['/registro']);
  }

}
