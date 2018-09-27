import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SaludoComponent } from './saludo/saludo.component';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';
import { MainComponent } from './main/main.component';
import { ListareasComponent } from './listareas/listareas.component';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    SaludoComponent,
    SaludoLocalComponent,
    MainComponent,
    ListareasComponent,
    TareasSimpleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
