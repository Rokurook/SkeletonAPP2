import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage  {

  email:string = '';
  password: string='';

  constructor() { }

/*función para validar el formato del email*/
validarEmail(email: string): boolean {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /*Expresión para validar email*/
  return patron.test(email);
}

}
