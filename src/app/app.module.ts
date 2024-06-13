import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UsuarioService } from './usuario/usuario.service';

// Importa el componente standalone
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // Importa el componente standalone aquí
    AppComponent
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent] // Bootstrap con el componente standalone
})
export class AppModule {
  ngDoBootstrap() {
    document.addEventListener('DOMContentLoaded', () => {
      const appRootElement = document.querySelector('app-root');
      if (appRootElement) {
        platformBrowserDynamic().bootstrapModule(AppModule)
          .catch(err => console.error(err));
      }
    });
  }
}
