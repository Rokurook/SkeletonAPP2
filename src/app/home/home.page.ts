import { Component } from '@angular/core';


//creamos interfaz libro
interface Libro {
  nombre: string;
  descripcion: string;
  autor: string;
  categoria: string;
  precio: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  user: string = ''; //creamos arreglo usuario/resivimos el usuario que envio login 

  

  libros: Libro[] = [
    { nombre: 'El Principito', descripcion: 'Historia sobre la inocencia y la sabiduría infantil.', autor: 'Antoine de Saint-Exupéry', categoria: 'Fábula', precio: 8900 },
    { nombre: 'Cien años de soledad', descripcion: 'Relato de la familia Buendía en Macondo.', autor: 'Gabriel García Márquez', categoria: 'Realismo mágico', precio: 12900 },
    { nombre: '1984', descripcion: 'Una sociedad controlada por el Gran Hermano.', autor: 'George Orwell', categoria: 'Distopía', precio: 9900 },
    { nombre: 'Don Quijote de la Mancha', descripcion: 'Aventuras de un caballero y su escudero.', autor: 'Miguel de Cervantes', categoria: 'Clásico', precio: 15000 },
    { nombre: 'Fahrenheit 451', descripcion: 'En un mundo donde leer está prohibido.', autor: 'Ray Bradbury', categoria: 'Ciencia ficción', precio: 10500 },
    { nombre: 'Crónica de una muerte anunciada', descripcion: 'Una tragedia contada desde el final.', autor: 'Gabriel García Márquez', categoria: 'Novela', precio: 11500 },
    { nombre: 'Orgullo y prejuicio', descripcion: 'Romance e ironía en la sociedad inglesa.', autor: 'Jane Austen', categoria: 'Romance', precio: 8700 },
    { nombre: 'El Hobbit', descripcion: 'La aventura de Bilbo Bolsón hacia la Montaña Solitaria.', autor: 'J. R. R. Tolkien', categoria: 'Fantasía', precio: 13200 },
    { nombre: 'Los miserables', descripcion: 'Redención y justicia en la Francia del siglo XIX.', autor: 'Victor Hugo', categoria: 'Drama histórico', precio: 16800 },
    { nombre: 'La sombra del viento', descripcion: 'Una historia de libros, amor y misterio.', autor: 'Carlos Ruiz Zafón', categoria: 'Misterio', precio: 13900 },
    { nombre: 'It', descripcion: 'Un grupo enfrenta sus miedos y un ser aterrador.', autor: 'Stephen King', categoria: 'Terror', precio: 14500 },
    { nombre: 'Harry Potter y la piedra filosofal', descripcion: 'El inicio de la aventura mágica.', autor: 'J. K. Rowling', categoria: 'Fantasía', precio: 12000 },
    { nombre: 'El alquimista', descripcion: 'Un viaje espiritual en busca de los sueños.', autor: 'Paulo Coelho', categoria: 'Filosofía', precio: 8900 },
    { nombre: 'La casa de los espíritus', descripcion: 'Saga familiar llena de realismo mágico.', autor: 'Isabel Allende', categoria: 'Novela', precio: 13400 },
    { nombre: 'Matar a un ruiseñor', descripcion: 'Una historia sobre justicia y prejuicio.', autor: 'Harper Lee', categoria: 'Clásico', precio: 9800 },
    { nombre: 'El nombre del viento', descripcion: 'La vida y aventuras del joven Kvothe.', autor: 'Patrick Rothfuss', categoria: 'Fantasía épica', precio: 15200 },
    { nombre: 'Drácula', descripcion: 'El clásico del vampiro por excelencia.', autor: 'Bram Stoker', categoria: 'Terror', precio: 9100 },
    { nombre: 'Los juegos del hambre', descripcion: 'Una lucha por sobrevivir en un futuro distópico.', autor: 'Suzanne Collins', categoria: 'Distopía', precio: 11000 },
    { nombre: 'El código Da Vinci', descripcion: 'Un misterio que mezcla historia y religión.', autor: 'Dan Brown', categoria: 'Thriller', precio: 12500 },
    { nombre: 'La odisea', descripcion: 'La travesía de Ulises para volver a Ítaca.', autor: 'Homero', categoria: 'Épico', precio: 9900 }
  ];

  //constante recibe el usuario la pagina loogin 
    constructor() {
      const nav = history.state;
      this.user = nav.user || 'Invitado'; 
    }

}
