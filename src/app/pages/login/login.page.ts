import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Dataservice } from 'src/app/services/dataservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage  {

  email: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private dataService: Dataservice
  ) {}

  // Método para mostrar alerta
  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Validar email
  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // LOGIN PRINCIPAL
  async login() {

    if (!this.email) {
      this.mostrarAlerta('El campo de correo no puede estar vacío.');
      return;
    }

    if (!this.validarEmail(this.email)) {
      this.mostrarAlerta('El formato del correo es inválido.');
      return;
    }

    if (!this.password) {
      this.mostrarAlerta('El campo de contraseña no puede estar vacío.');
      return;
    }

    if (this.password.length < 4) {
      this.mostrarAlerta('La contraseña no puede tener menos de 4 caracteres.');
      return;
    }

    // Validación en BD
    const logged = await this.dataService.validarUsuario(this.email, this.password);

    if (logged) {
      localStorage.setItem('sesion_iniciada', 'true');
      this.navCtrl.navigateForward(['/home'], {
        queryParams: { email: this.email }
      });
    } else {
      this.mostrarAlerta('No existe el usuario en la base de datos');
    }
  }

  // Ir a registro
  registro() {
    this.navCtrl.navigateForward(['/registro']);
  }
}

  




 
