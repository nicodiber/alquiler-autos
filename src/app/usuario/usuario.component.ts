import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './usuario.service';
import { User } from './user';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  usuarios: User[] = [];

  constructor(
    private _userService: UsuarioService
  ) { }

  ngOnInit() {
  }

  getUsers() {
    this._userService.getUsers()
      .then(usuarios => this.usuarios = usuarios)
  }

}
