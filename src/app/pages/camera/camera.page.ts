import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import {  DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone:false
})
export class CameraPage implements OnInit {

  public photo: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer,private alertController: AlertController) { }

  ngOnInit() {
  }

  async takePicture() {
    try {
      const capturedPhoto = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });

       // Use webPath to display the new image instead of base64 since it's already loaded into memory
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(capturedPhoto.webPath!);

      // Si deseas mostrar la imagen inmediatamente, puedes establecerla en el template
      // <img [src]="image" *ngIf="image">
    } catch (error) {
      this.mostrarAlerta('Error al tomar la foto' +  error);
    }
  }

      // Método para mostrar alerta de error
  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }


}




