import { NgModule } from '@angular/core'; // Importa el decorador NgModule de Angular
import { BrowserModule } from '@angular/platform-browser'; // Importa BrowserModule para navegadores
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para configurar HttpClient
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Importa platformBrowserDynamic para bootstrap dinámico

import { UsuarioService } from './usuario/usuario.service'; // Importa UsuarioService

import { AppComponent } from './app.component'; // Importa AppComponent

@NgModule({
  declarations: [], // Aquí se declaran los componentes que pertenecen a este módulo
  imports: [
    BrowserModule, // Importa BrowserModule para aplicaciones web
    HttpClientModule // Importa HttpClientModule para poder hacer peticiones HTTP
  ],
  providers: [
    UsuarioService // Proveedor del servicio UsuarioService, disponible en toda la aplicación
  ],
  bootstrap: [] // No incluye ningún componente para bootstrap en el momento de carga del módulo
})
export class AppModule {
  // Método que se llama para bootstrapear la aplicación de forma manual
  ngDoBootstrap() {
    // Espera hasta que el contenido del DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', () => {
      // Encuentra el elemento con la etiqueta 'app-root'
      const appRootElement = document.querySelector('app-root');
      if (appRootElement) {
        // Si se encuentra el elemento, bootstrap la aplicación
        import('./app.component') // Carga el AppComponent de forma dinámica
          .then(({ AppComponent }) => {
            // Bootstrap el módulo AppModule
            platformBrowserDynamic().bootstrapModule(AppModule);
          })
          .catch(err => console.error(err)); // Maneja cualquier error en la carga del módulo
      }
    });
  }
}
