import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Dbservice {

  public db!: SQLiteObject;

    //Observable
    private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

      constructor(private sqlite: SQLite, private toastController: ToastController)  {
        this.iniDatabase();
      }

  private iniDatabase(){
    this.sqlite.create({
      name:'mydatabase.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db = db;
      this.createTables();
      this.isDBReady.next(true); //emitimos true cuando la base de datos esta lista 
      this.presentToast('Base de datos y tabla creada con exito');
    }).catch(error => console.log(error));
  }

  private createTables() {
  this.db.executeSql(
    `
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario TEXT,
      password TEXT,
      nombre TEXT,
      apellido TEXT,
      nivel_de_estudios TEXT,
      fecha_nacimiento TEXT
    )
    `,
    []
  )
  .then(() => this.presentToast('Table created'))
  .catch(error => this.presentToast('Error creating table: ' + error));
}


//funsion insertar al uausrio 
  insertUsuario(nombre: string, apellido: string, usuario: string, password: string, selectedOption: string, selectedDate: string,){
    return this.db.executeSql(`
      INSERT INTO usuario (nombre, apellido, usuario, password, nivel_de_estudios, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?);
    `, [nombre, apellido, usuario, password, selectedOption, selectedDate])
    .then(() => this.presentToast('Usuario insertardo correctamente'))
    .catch(error => this.presentToast('Error al insertar usuario:' + error));
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 200
    });
    toast.present();
  }

  
}
