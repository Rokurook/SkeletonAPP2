import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

//creamos interfaz libro
interface Libro {
  nombre: string;
  imagen: string;  // URL o ruta de la imagen del libro
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


export class HomePage  implements OnInit {
  email: string= '';
  password: string= '';
  user: string = ''; //creamos arreglo usuario/resivimos el usuario que envio login
  bienvenidos: string= '';

  libros: Libro[] = [
  { nombre: 'El Principito', imagen: 'assets/img/principe.png', descripcion: 'Historia sobre la inocencia y la sabiduría infantil.', autor: 'Antoine de Saint-Exupéry', categoria: 'Fábula', precio: 8900 },
  { nombre: 'Cien años de soledad', imagen: 'assets/img/cien_soledad.png', descripcion: 'Relato de la familia Buendía en Macondo.', autor: 'Gabriel García Márquez', categoria: 'Realismo mágico', precio: 12900 },
  { nombre: '1984', imagen: 'assets/img/1984.png', descripcion: 'Una sociedad controlada por el Gran Hermano.', autor: 'George Orwell', categoria: 'Distopía', precio: 9900 },
  { nombre: 'Don Quijote de la Mancha', imagen: 'assets/img/quijote.png', descripcion: 'Aventuras de un caballero y su escudero.', autor: 'Miguel de Cervantes', categoria: 'Clásico', precio: 15000 },
  { nombre: 'Fahrenheit 451', imagen: 'assets/img/451.png', descripcion: 'En un mundo donde leer está prohibido.', autor: 'Ray Bradbury', categoria: 'Ciencia ficción', precio: 10500 },
  { nombre: 'Crónica de una muerte anunciada', imagen: 'assets/img/cronica.png', descripcion: 'Una tragedia contada desde el final.', autor: 'Gabriel García Márquez', categoria: 'Novela', precio: 11500 },
  { nombre: 'Orgullo y prejuicio', imagen: 'assets/img/orgullo.png', descripcion: 'Romance e ironía en la sociedad inglesa.', autor: 'Jane Austen', categoria: 'Romance', precio: 8700 },
  { nombre: 'El Hobbit', imagen: 'assets/img/hobbit.jpg', descripcion: 'La aventura de Bilbo Bolsón hacia la Montaña Solitaria.', autor: 'J. R. R. Tolkien', categoria: 'Fantasía', precio: 13200 },
  { nombre: 'Los miserables', imagen: 'assets/img/miserables.png', descripcion: 'Redención y justicia en la Francia del siglo XIX.', autor: 'Victor Hugo', categoria: 'Drama histórico', precio: 16800 },
  { nombre: 'La sombra del viento', imagen: 'assets/img/sombra.png', descripcion: 'Una historia de libros, amor y misterio.', autor: 'Carlos Ruiz Zafón', categoria: 'Misterio', precio: 13900 },
  { nombre: 'It', imagen: 'assets/img/it.png', descripcion: 'Un grupo enfrenta sus miedos y un ser aterrador.', autor: 'Stephen King', categoria: 'Terror', precio: 14500 },
  { nombre: 'Harry Potter y la piedra filosofal', imagen: 'assets/img/harry.png', descripcion: 'El inicio de la aventura mágica.', autor: 'J. K. Rowling', categoria: 'Fantasía', precio: 12000 },
  { nombre: 'El alquimista', imagen: 'assets/img/alquimia.png', descripcion: 'Un viaje espiritual en busca de los sueños.', autor: 'Paulo Coelho', categoria: 'Filosofía', precio: 8900 },
  { nombre: 'La casa de los espíritus', imagen: 'assets/img/casa.png', descripcion: 'Saga familiar llena de realismo mágico.', autor: 'Isabel Allende', categoria: 'Novela', precio: 13400 },
  { nombre: 'Matar a un ruiseñor', imagen: 'assets/img/matar.png', descripcion: 'Una historia sobre justicia y prejuicio.', autor: 'Harper Lee', categoria: 'Clásico', precio: 9800 },
  { nombre: 'El nombre del viento', imagen: 'assets/img/nombre.png', descripcion: 'La vida y aventuras del joven Kvothe.', autor: 'Patrick Rothfuss', categoria: 'Fantasía épica', precio: 15200 },
  { nombre: 'Drácula', imagen: 'assets/img/dracula.png', descripcion: 'El clásico del vampiro por excelencia.', autor: 'Bram Stoker', categoria: 'Terror', precio: 9100 },
  { nombre: 'Los juegos del hambre', imagen: 'assets/img/juegos.png', descripcion: 'Una lucha por sobrevivir en un futuro distópico.', autor: 'Suzanne Collins', categoria: 'Distopía', precio: 11000 },
  { nombre: 'El código Da Vinci', imagen: 'assets/img/codigo.png', descripcion: 'Un misterio que mezcla historia y religión.', autor: 'Dan Brown', categoria: 'Thriller', precio: 12500 },
  { nombre: 'La odisea', imagen: 'assets/img/odisea.png', descripcion: 'La travesía de Ulises para volver a Ítaca.', autor: 'Homero', categoria: 'Épico', precio: 9900 }
];


 //constante recibe el usuario la pagina loogin 
  constructor(private router: ActivatedRoute,private menu: MenuController) {
    const nav = history.state;
    this.user = nav.user || 'Invitado'; 
  }


  ngOnInit(){
    this.menu.close("mainMenu");

    //obtenre los parametro de la Url
    this.router.queryParams.subscribe(params => {
      this.email = params['email'];
      this.password = params['password'];
    });
  }

}
