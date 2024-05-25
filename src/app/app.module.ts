import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para configurar HttpClient
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Importa platformBrowserDynamic

import { UsuarioService } from './usuario/usuario.service'; // Importa UsuarioService

import { AppComponent } from './app.component'; // Importa AppComponent

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService // Asegúrate de usar el nombre correcto aquí
  ],
  bootstrap: [] // Elimina AppComponent del arreglo bootstrap
})
export class AppModule {
  // Usa la función bootstrapApplication para inicializar tu aplicación
  ngDoBootstrap() {
    document.addEventListener('DOMContentLoaded', () => {
      // Encuentra el elemento con la etiqueta 'app-root' y bootstrap la aplicación
      const appRootElement = document.querySelector('app-root');
      if (appRootElement) {
        // Si se encuentra el elemento, bootstrap la aplicación
        import('./app.component')
          .then(({ AppComponent }) => {
            platformBrowserDynamic().bootstrapModule(AppModule);
          })
          .catch(err => console.error(err));
      }
    });
  }
}
