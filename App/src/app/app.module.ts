import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IconoApComponent } from './components/icono-ap/icono-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconoApComponent,
    BannerComponent,
    RedesSocialesComponent,
    UsuarioComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
