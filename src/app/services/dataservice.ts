import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx'; // importar en app.modules.ts
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Dataservice {

  public db!: SQLiteObject;

  // observable
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false); 

  constructor(private sqlite: SQLite, private toastController: ToastController) { 
    this.initDatabase();  
  }


    private initDatabase() {
    this.sqlite.create({
      name: 'mydata.db',
      location: 'default'
    }).then((db: SQLiteObject) => { 
      
      this.isDBReady.next(true); 
      this.db = db;
      this.createTables();
      this.isDBReady.next(true); // Emitimos true cuando la base de datos esté lista
      this.presentToast('Base de datos y tabla creadas con éxito'); 

    }).catch(error => this.presentToast('Error al insertar usuario:'+ error));
  }


  private createTables() {
    this.db.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario TEXT,
        password TEXT,
        nombre TEXT,
        apellido TEXT,
        nivel_de_estudios TEXT,
        fecha_nacimiento TEXT
      )`, [])
      .then(() => this.presentToast('Tabla created'))
      .catch(error => this.presentToast('Error creando tabla' + error));
  }


    insertUsuario(nombre: string, apellido: string, usuario: string, password: string, selectedOption: string, selectedDate: string) {
    return this.db.executeSql(`
      INSERT INTO usuarios (nombre, apellido, usuario, password, nivel_de_estudios, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?);
    `, [nombre, apellido, usuario, password, selectedOption, selectedDate])
    .then(() => this.presentToast('Usuario insertado correctamente'))
    .catch(error => this.presentToast('Error al insertar usuario:'+ error));
  }

  
  validarUsuario(usuario: string, password: string) {
    return this.db.executeSql('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password])
      .then((res) => {
        if (res.rows.length > 0) {
          return res.rows.item(0); // Retorna el primer usuario que coincide
        } else {
          return null; // Retorna null si no se encontró ningún usuario
        }
      })
      .catch(error =>  this.presentToast('Error al obtener usuario :' + error));
  }
  
    private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  
}