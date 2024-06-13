import { Component, OnInit } from '@angular/core'; // Importa los decoradores Component y OnInit de Angular

import { UsuarioService } from './usuario.service'; // Importa el servicio UsuarioService
import { User } from './user'; // Importa la interfaz User

@Component({
  selector: 'app-usuario', // Define el selector de este componente, utilizado en las plantillas HTML para referenciarlo
  standalone: true, // Indica que este es un componente autónomo
  imports: [], // Especifica otros módulos que este componente necesita, si los hay
  templateUrl: './usuario.component.html', // La ruta del archivo de la plantilla HTML de este componente
  styleUrl: './usuario.component.css' // La ruta del archivo CSS de este componente
})
export class UsuarioComponent implements OnInit {
  usuarios: User[] = [
    //simulamos usuarios para testear
    new User(1, 'nico', 'dib', 'ndib@gmail.com'),
    new User(2, 'ale', 'teb', 'ateb@gmail.com'),
    new User(3, 'bruno', 'nei', 'bnei@gmail.com'),
    new User(4, 'eli', 'mir', 'emir@gmail.com')
  ]; // Declara la propiedad usuarios como un array vacío de objetos User

  // El constructor inyecta el servicio UsuarioService, asignándolo a la propiedad privada _userService
  constructor(
    private _usuarioService: UsuarioService
  ) { }

  // Método del ciclo de vida de Angular que se ejecuta después de la creación del componente
  ngOnInit() {
    //this.getUsers();
  }

  // Método para obtener la lista de usuarios usando el servicio UsuarioService
  getUsers() {
    //this._usuarioService.getUsers()
    //  .then(usuarios => this.usuarios = usuarios) // Asigna la lista de usuarios obtenida a la propiedad usuarios
  }
}