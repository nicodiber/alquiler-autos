import { Injectable } from '@angular/core'; // Importa el decorador Injectable de Angular
import { HttpClient } from '@angular/common/http'; // Importa el servicio HttpClient para realizar solicitudes HTTP
import { User } from './user'; // Importa la interfaz User
import { map } from 'rxjs/operators'; // Importa el operador map de RxJS para transformar los datos de la respuesta
import { lastValueFrom } from 'rxjs'; // Importa lastValueFrom para convertir un observable en una promesa

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // Constructor que inyecta HttpClient para poder realizar solicitudes HTTP
  constructor(
    private _httpClient: HttpClient
  ) { }

  // Método para crear un nuevo usuario
  create(usuario: User): Promise<any> {
    // Realiza una solicitud POST para crear un usuario y convierte el observable en una promesa
    return lastValueFrom(this._httpClient.post('/usuarios', usuario)
      .pipe(map(data => data as any))); // Usa map para transformar la respuesta
  }

  // Método para eliminar un usuario
  destroy(usuario: User): Promise<any> {
    // Realiza una solicitud DELETE para eliminar un usuario específico por su ID y convierte el observable en una promesa
    return lastValueFrom(this._httpClient.delete('/usuarios/' + usuario.idUsuario)
      .pipe(map(data => data as any))); // Usa map para transformar la respuesta
  }

  // Método para actualizar un usuario
  update(usuario: User): Promise<any> {
    // Realiza una solicitud PUT para actualizar un usuario específico por su ID y convierte el observable en una promesa
    return lastValueFrom(this._httpClient.put('/usuarios/' + usuario.idUsuario, usuario)
      .pipe(map(data => data as any))); // Usa map para transformar la respuesta
  }

  // Método para obtener todos los usuarios
  getUsers(): Promise<any> {
    // Realiza una solicitud GET para obtener la lista de usuarios y convierte el observable en una promesa
    return lastValueFrom(this._httpClient.get('/usuarios')
      .pipe(map(data => data as any))); // Usa map para transformar la respuesta
  }

  // Método para obtener un usuario específico por su ID
  getUser(usuario: User): Promise<any> {
    // Realiza una solicitud GET para obtener un usuario específico por su ID y convierte el observable en una promesa
    return lastValueFrom(this._httpClient.get('/usuarios/' + usuario.idUsuario)
      .pipe(map(data => data as any))); // Usa map para transformar la respuesta
  }
}
