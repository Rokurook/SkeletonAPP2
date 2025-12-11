import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dataservice {

  public db!: SQLiteObject;
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private sqlite: SQLite,
    private toastController: ToastController
  ) { 
    this.initDatabase();
  }


  private initDatabase() {
    this.sqlite.create({
      name: 'mydata.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.db = db;
      this.createTables();
      this.isDBReady.next(true);
      this.presentToast('Base de datos y tabla creadas con éxito');
    })
    .catch(error => {
      this.presentToast('Error al crear base de datos: ' + error);
    });
  }

 
  private createTables() {
    const query = `
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT,
        password TEXT,
        nombre TEXT,
        apellido TEXT,
        nivel_de_estudios TEXT,
        fecha_nacimiento TEXT
      );
    `;
    
    this.db.executeSql(query, [])
      .then(() => this.presentToast('Tabla creada'))
      .catch(error => this.presentToast('Error creando tabla: ' + error));
  }

 
  insertUsuario(
    nombre: string, 
    apellido: string, 
    email: string, 
    password: string, 
    nivelEstudios: string, 
    selectedDate: string
  ) {

    const query = `
      INSERT INTO usuarios (nombre, apellido, email, password, nivel_de_estudios, fecha_nacimiento)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    return this.db.executeSql(query, [
      nombre,
      apellido,
      email,
      password,
      nivelEstudios,
      selectedDate
    ])
    .then(() => this.presentToast('Usuario insertado correctamente'))
    .catch(error => this.presentToast('Error al insertar usuario: ' + error));
  }

  validarUsuario(email: string, password: string) {

    console.log("VALIDANDO USUARIO:", email, password);

    const query = `
      SELECT * FROM usuarios 
      WHERE email = ? AND password = ?
    `;

    return this.db.executeSql(query, [email, password])
      .then(res => {

        console.log("SELECT ejecutado. Filas encontradas:", res.rows.length);

        if (res.rows.length > 0) {
          const user = res.rows.item(0);
          console.log("Usuario encontrado:", user);
          return user;
        } else {
          console.log("No existe usuario con esas credenciales");
          return null;
        }
      })
      .catch(error => {
        console.error("ERROR en SELECT usuarios:", error);
        this.presentToast('Error en SELECT usuarios: ' + error);
        return null;
      });
  }

  
  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}






